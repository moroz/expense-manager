class Entry < ApplicationRecord
  belongs_to :account
  before_create :update_account_balance

  private 

  def update_account_balance
    self.account.update_balance! 
  end
end
