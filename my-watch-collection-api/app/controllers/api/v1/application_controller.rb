module Api
    module V1
        class ApplicationController < ApplicationController::API
            include ActionConroller::MimeResponds
            protect_from_forgery with: :null_session
            respond_to :json
        end
    end
end
