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
            if params[:image]
                @watch.image.attach(params[:image]) 
                @watch.save
            else
                @watch.image purge    
            end
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
        # if params[:image]
        #     if @watch.image.attached?
        #         @watch.image.purge
        #     end
        #     @watch.image.attach(params[:image]) 
        #     @watch.save
        # end 
        @watch.update(watch_params)
        @watch.image.attach(params[:image])
        @watch.save
        
    end

    def destroy
        @watch.image.purge
        @watch.destroy
    end

    private
    def set_watch
        @watch = Watch.find(params[:id])
    end

    def watch_params
        # params hash keys (strong params)
        # params.require(:watch).permit(
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
