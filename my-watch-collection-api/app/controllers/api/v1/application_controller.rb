module Api
    module V1
        class ApplicationController < ApplicationController::API
            include ActionConroller::MimeResponds
            protect_from_forgery with: :null_session
        end
    end
end
