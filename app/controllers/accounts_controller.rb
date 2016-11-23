class AccountsController < ApplicationController
  before_action :authenticate
  layout :which_layout

  def angular
    render 'layouts/angular'
  end

  def show
    respond_with current_user.account, as: :json
  end

  private

  def which_layout
    'angular'
  end

  def authenticate
    redirect_to new_user_session_path unless user_signed_in?
  end
end
