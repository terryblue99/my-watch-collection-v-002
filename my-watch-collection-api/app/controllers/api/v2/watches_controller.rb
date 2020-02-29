class Api::V2::WatchesController < ApplicationController

    before_action :set_watch, only: [:update, :destroy]
    before_action :unattached_blobs, only: [:update, :destroy]

    def index
        @watches = Watch.where(user_id: params[:user_id]).with_attached_image
        render json: @watches.map { |watch|
            watch.as_json.merge({ image: url_for(watch.image) })
        } 
    end

    def create
        @newWatch = Watch.create!(watch_params)
        
        if @newWatch
            session[:watch_id] = @newWatch.id
            render json: {
              status: :created,
              watch: @newWatch
            }
        else
            render json: { status: 500 }
        end
    end

    def update  
        if params[:image] && @watch.image
            @watch.image.attachment.purge
            @watch.image.blob.purge
            @watch.image.purge
        end
        
        @watch.update(watch_params)   
    end

    def destroy
        @watch.destroy
        
        if @watch.image.attachment
            @watch.image.attachment.purge
        end
        
        if @watch.image.blob
            @watch.image.blob.purge
        end  

        if @watch.image
            @watch.image.purge
        end
    end

    private

    def set_watch
        @watch = Watch.find(params[:id])
    end

    def unattached_blobs
        if ActiveStorage::Blob.unattached
            ActiveStorage::Blob.unattached.each(&:purge)
        end
    end

    def watch_params
        # params hash keys (strong params)
        params.permit(
            :watch_name, 
            :watch_maker, 
            :movement, 
            :complications,
            :band, 
            :model_number, 
            :case_measurement,
            :water_resistance, 
            :date_bought, 
            :cost,
            :user_id,
            :notes,
            :image
        )
    end
end
