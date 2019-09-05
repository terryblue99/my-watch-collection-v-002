module Api
    module V2
        class ApplicationController < ApplicationController::API
            skip_before_action :verify_authenticity_token
            include ActionConroller::Cookies
            protect_from_forgery with: :null_session
            respond_to :json
        end
    end
end