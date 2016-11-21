require 'rails_helper'

RSpec.describe EntriesController, type: :controller do
  fixtures :all

  describe "POST #create" do
    it "returns http success" do
      post :create, params: { entry: { amount: -100, description: "Alcohol" } }, format: :json
      expect(response).to have_http_status(:success)
    end
  end

end
