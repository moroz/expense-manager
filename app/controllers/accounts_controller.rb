class AccountsController < ApplicationController
  before_action :authenticate

  def show
    render json: current_user.account
  end
end
