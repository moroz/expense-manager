require 'rails_helper'

RSpec.describe EntriesController, type: :controller do
  before :each do
    @request.env['devise.mapping'] = Devise.mappings[:user]
    @user = FactoryGirl.create(:user)
    sign_in @user
  end

  describe "POST #create" do
    it "returns http success" do
      post :create, params: { entry: { amount: -100, description: "Alcohol" } }, format: :json
      expect(response).to have_http_status(:success)
    end
  end

  describe "PUT update" do
    let!(:entry) { FactoryGirl.create(:entry, amount: 100.0, description: "Money",
                                      account: @user.account) }
    
    it "returns http success" do
      put :update, params: { entry: { id: entry.id, description: "No money", amount: -50 } }
      expect(response).to have_http_status(:success)
    end
  end

end
