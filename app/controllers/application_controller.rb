require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  respond_to :json, :html

  protect_from_forgery with: :exception

  def authenticate
    redirect_to new_user_session_path unless user_signed_in?
  end
end
