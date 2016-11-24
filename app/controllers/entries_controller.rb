class EntriesController < ApplicationController
  def create
    account = current_user.account
    entry = account.entries.create(entry_params)
    render json: entry
  end

  def show
    account = current_user.account
    entry = account.entries.find_by_id(params[:id])
    if entry
      render json: entry
    else
      head :not_found
    end
  end

  private

  def entry_params
    params.require(:entry).permit(:description,:amount)
  end
end
