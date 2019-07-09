module Api
    module V1
        class WatchesController < ApplicationController

            before_action :set_watch, only: [:show, :edit, :update, :destroy]

            def index
                render json: Watch.all
            end

            def show
            end
            
            def create
            end

            def update
            end

            def destroy
            end

            private
            def set_watch
                @watch = Watch.find_watch(params[:id])
            end

            def watch_params
                # params hash keys (strong params)
                params.require(:watch).permit(
                    :watch_name,
                    :watch_maker,
                    :movement,
                    :band,
                    :model_number,
                    :water_resistance,
                    :date_bought,
                    :cost,
                    :case_measurement,
                    :watch_image,
                    complications_attributes: [:complication_name, :complication_description]
                )
            end
        end
    end
end
