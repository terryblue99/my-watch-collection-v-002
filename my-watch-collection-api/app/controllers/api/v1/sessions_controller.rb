class Api::V1::SessionsController < ApplicationController
  include CurrentUserConcern
  def create
    user = User
            .find_by(email: params['user']['email'])
            .try(:authenticate, params['user']['password']) # authenticate is built into rails

    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        logged_in: true,
        user: user
      }
    else
      render json: { status: 401 } # code for unauthorised user
    end
  end

  def logged_in
    if @current_user # set in concerns/current_user_concern.rb
      render json: {
        logged_in: true,
        user: @current_user
      }
    else
      render json: {
        logged_in: false
      }
    end  
  end
  
  def logout
    reset_session
    render json: {
      status: 200,
      logged_out: true
    }
  end

end
