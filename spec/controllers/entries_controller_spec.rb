require 'rails_helper'

RSpec.describe EntriesController, type: :controller do
  before :each do
    @request.env['devise.mapping'] = Devise.mappings[:user]
    @user = FactoryGirl.create(:user)
    sign_in @user
  end

  let(:entry) { FactoryGirl.create(:entry, amount: 100.0, description: "Money", account: @user.account) }

  describe "POST #create" do
    it "returns http success" do
      post :create, params: { entry: { amount: -100, description: "Alcohol" } }, format: :json
      expect(response).to have_http_status(:success)
    end
  end

  describe "PUT update" do
    it "returns http success" do
      put :update, params: { id: entry.id, format: :json, entry: { description: "No money", amount: -50 } }
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET show" do
    context "with an existing entry" do
      it "returns http success" do
        get :show, params: { id: entry.id, format: :json }
        expect(response).to have_http_status(:success)
      end
    end

    context "with a non-existent entry id" do
      it "returns http error" do
        get :show, params: { id: 108, format: :json }
        expect(response).to have_http_status(404)
      end
    end
  end

end
