class Api::V2::WatchesController < ApplicationController

    before_action :set_watch, only: [:show, :edit, :update, :destroy]

    def index
        watches = Watch.where(user_id: params[:userId]).with_attached_image
        render json: watches.map { |watch|
            watch.as_json.merge({ image: url_for(watch.image) })
        } 
    end

    def create
        @watch = Watch.create!(watch_params)
        
        if @watch
            render json: {message: 'watch saved!'}
        else
            render json: @watch.errors.full_messages
        end
    end

    def update
        @watch.update(watch_params)
    end

    def destroy
        @watch.image.purge # synchronous
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
            :image
        )
    end
end
