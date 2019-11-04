class Api::V2::SessionsController < ApplicationController

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
  
  def logout
    reset_session
    render json: {
      status: 200,
      logged_out: true
    }
  end

  def update
    @user = User.find(params[:id])

    if @user
      @user.update(user_params)
        render json: {
        status: :updated,
        user: @user
      }
    else
      render json: { status: 401, session_id: session[:user_id] } # code for unauthorised user
    end
   
  end

  def user_params
    # params hash keys (strong params)
    params.permit(
        :email,
        :password,
        :password_confirmation
    )
  end

end
