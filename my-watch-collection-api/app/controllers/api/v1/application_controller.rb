module Api
    module V1
        class ApplicationController < ApplicationController::API
            include ActionConroller::MimeResponds
        end
    end
end
