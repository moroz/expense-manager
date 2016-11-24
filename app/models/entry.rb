class Entry < ApplicationRecord
  belongs_to :account
  after_create :update_account_balance

  scope :date, ->(date) { where(created_at: date.beginning_of_day..date.end_of_day) }
  scope :today, -> { date(Date.today) }
  scope :month, ->(month) { where(created_at: month.beginning_of_month..month.end_of_month) }
  scope :this_month, -> { month(Date.today) }

  def to_json(options = {})
    super(options.merge(only: [:id, :amount, :description]))
  end

  private 

  def update_account_balance
    self.account.update_balance! 
  end
end
