class EntriesController < ApplicationController
  def create
    account = current_user.account
    entry = account.entries.create(entry_params)
    respond_with account, entry
  end

  private

  def entry_params
    params.require(:entry).permit(:description,:amount)
  end
end
