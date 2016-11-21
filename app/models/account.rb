class Account < ApplicationRecord
  has_many :entries

  scope :current, -> { first }

  def as_json(options = {})
    super(options.merge(include: :entries))
  end

  def update_balance!
    self.update_attributes(balance: self.entries.sum(:amount))
  end
end
