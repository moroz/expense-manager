Rails.application.routes.draw do
  devise_for :users
  root to: 'ng#angular'

  scope '/api' do
    resources :entries, only: [:show,:create,:update,:destroy]
    resource :account, only: [:show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
