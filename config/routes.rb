Rails.application.routes.draw do

  resources :restaurants, only: [:create, :show, :index]
  resources :cities, only: [:create, :show, :index]
  resources :reviews, only: [:create, :index, :show, :update, :destroy]
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
    
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
