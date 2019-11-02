class Api::V2::RegistrationsController < ApplicationController
  def create
    user = User.create!(user_params)

    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: user
      }
    else
      render json: { status: 500 }
    end
  end

  def update
    user = User.find(params[:id])

    if user
      user.update(user_params)
      session[:user_id] = user.id
      render json: {
        status: :updated,
        user: user
      }
    else
      render json: { status: 500 }
    end
   
  end

  def user_params
    # params hash keys (strong params)
    params.require(:user).permit(
        :email,
        :password,
        :password_confirmation
    )
end

end