require 'rails_helper'

RSpec.describe Account, type: :model do
  describe "when created" do
    it "has balance set to 0.0" do
      account = Account.create(title: "Account", currency: "USD")
      expect(account.balance).to eq(0.0)
    end
  end
end
