module Api
    module V1
        class ApplicationController < ApplicationController::API
            skip_before_action :verify_authenticity_token
            include ActionConroller::MimeResponds
            protect_from_forgery with: :null_session
            respond_to :json
        end
    end
end