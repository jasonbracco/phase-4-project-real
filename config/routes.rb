Rails.application.routes.draw do

  resources :restaurants, only: [:create]
  resources :cities, only: [:create, :index]
  resources :reviews, only: [:create]
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  elete "/logout", to: "sessions#destroy"
    
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
