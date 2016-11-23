class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_one :account
  after_create :create_account

  def create_account
    self.account = Account.create(currency: "USD", title: "Default account")
  end
end
