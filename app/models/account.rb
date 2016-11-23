class Account < ApplicationRecord
  has_many :entries, dependent: :destroy
  belongs_to :user

  def as_json(options = {})
    super(options.merge(include: {entries: {except: [:account_id, :updated_at]}}))
  end

  def update_balance!
    self.update_attributes(balance: self.entries.sum(:amount))
  end
end
