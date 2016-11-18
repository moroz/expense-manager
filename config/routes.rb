Rails.application.routes.draw do
  get 'entries/create'

  get 'accounts_controller/show'

  root to: 'application#angular'

  resource :account, only: [:show] do
    resources :entries, only: [:show,:create]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
