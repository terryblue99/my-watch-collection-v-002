class Api::V2::RegistrationsController < ApplicationController

  before_action :unattached_blobs

  def create
    @user = User.create!(
      email: params['user']['email'],
      password: params['user']['password'],
      password_confirmation: params['user']['password_confirmation']
    )

    if @user
      session[:user_id] = @user.id
      render json: {
        status: :created,
        user: @user
      }
    else
      render json: { status: 500 }
    end
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

  def destroy
    @userWatches = Watch.where(user_id: params[:id])
    if @userWatches
      @userWatches.destroy_all
    end

    User.find(params[:id]).destroy
  end

  private

  def unattached_blobs
    if ActiveStorage::Blob.unattached
      ActiveStorage::Blob.unattached.each(&:purge)
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
