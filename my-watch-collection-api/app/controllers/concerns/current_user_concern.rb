module CurrentUserConcern
  extend ActiveSupport::Concern

  included do
    before_action :set_current_user
  end

  def set_current_user
    if session[:user_id]
      @current_user = User.find_by(id: session[:user_id]) # current_user can be used by any method
                                                          # to check for presence of a current user
    end
  end

end