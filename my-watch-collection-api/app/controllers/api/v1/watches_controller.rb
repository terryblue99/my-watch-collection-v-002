class Api::V1::WatchesController < ApplicationController

    before_action :set_watch, only: [:show, :edit, :update, :destroy]

    def index
        render json: Watch.where(user_id: params[:userId])
    end

    def create
        @watch = Watch.create(watch_params)
    end

    def update
        @watch.update(watch_params)
    end

    def destroy
        @watch.destroy
    end

    private
    def set_watch
        @watch = Watch.find(params[:id])
    end

    def watch_params
        # params hash keys (strong params)
        params.require(:watch).permit(
            :watch_name,
            :watch_maker,
            :movement,
            :complications,
            :band,
            :model_number,
            :case_measurement,
            :water_resistance,
            :date_bought,
            :cost
        )
    end
end

