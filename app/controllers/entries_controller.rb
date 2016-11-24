class EntriesController < ApplicationController
  def create
    entry = account.entries.create(entry_params)
    render json: entry
  end

  def show
    entry = account.entries.find_by_id(params[:id])
    if entry
      render json: entry
    else
      head :not_found
    end
  end

  def update
    entry = account.entries.find_by_id(params[:id])
    if entry
      if entry.update(entry_params)
        render json: entry
      else
        head 500
      end
    else
      head 404
    end
  end

  def destroy
    entry = account.entries.find_by_id(params[:id])
    if entry
      if entry.delete
        account.update_balance!
        head 204
      else
        head 500
      end
    else
      head 404
    end
  end

  private

  def account
    @account ||= current_user.account
  end

  def entry_params
    params.require(:entry).permit(:description,:amount)
  end
end
