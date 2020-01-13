class Api::V2::WatchesController < ApplicationController

    before_action :set_watch, only: [:update, :destroy]

    def index
        watches = Watch.where(user_id: params[:user_id]).with_attached_image
        render json: watches.map { |watch|
            watch.as_json.merge({ image: url_for(watch.image) })
        } 
    end

    def create
        watch = Watch.create!(watch_params)
        
        if watch
            session[:watch_id] = watch.id
            render json: {
              status: :created,
              watch: watch
            }
        else
            render json: { status: 500 }
        end
    end

    def update  
        if params[:image] && @watch.image
            ActiveStorage::Attachment.find(@watch.image.id).purge
        end
        @watch.update(watch_params)   
    end

    def destroy
        ActiveStorage::Attachment.find(@watch.image.id).purge
        @watch.destroy
    end

    private
    def set_watch
        @watch = Watch.find(params[:id])
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
