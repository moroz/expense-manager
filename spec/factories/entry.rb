FactoryGirl.define do
  factory :entry do
    amount 100.0
    description "Alcohol"
    association :account, factory: :account
  end
end
