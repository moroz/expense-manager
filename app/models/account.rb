class Account < ApplicationRecord
  has_many :entries

  scope :current, -> { first }

  def as_json(options = {})
    super(options.merge(include: :entries))
  end

  def update_balance!
    balance = self.entries.map(&:amount).sum

    self.update_attributes(balance: balance)
  end
end
