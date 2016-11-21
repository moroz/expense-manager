require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  respond_to :json

  helper_method :current_account

  def current_account
    Account.current
  end

  protect_from_forgery with: :exception

  def angular
    render 'layouts/angular'
  end
end
