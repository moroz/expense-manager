class AccountsController < ApplicationController
  before_action :authenticate

  def show
    respond_with current_user.account, as: :json
  end
end
