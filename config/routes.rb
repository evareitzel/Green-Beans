Rails.application.routes.draw do
  resources :wallets, only: [:index, :show] # index for development only
  post '/create-account', to: 'wallets#create'
  get '/wallet', to: 'wallets#show' # '/wallet'
  # get "/me", to: "users#show"

  resources :cryptos, only: :index

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
