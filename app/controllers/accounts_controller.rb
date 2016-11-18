class AccountsController < ApplicationController
  def show
    account = Account.includes(:entries).current

    respond_with account
  end
end
