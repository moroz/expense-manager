require 'rails_helper'

RSpec.describe AccountsController, type: :controller do
  context "when not authorized" do
    describe "GET show" do
      it "redirects to login page" do
        get :show
        expect(response).to have_http_status(:redirect)
      end
    end
  end

  context "when authorized" do
    authorize_before_each_example
    describe "GET show" do
      it "responds with account as JSON" do
        get :show
        expect(response).to have_http_status(:success)
      end
    end
  end
end
