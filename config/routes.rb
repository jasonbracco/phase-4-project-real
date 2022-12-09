Rails.application.routes.draw do

  resources :restaurants, only: [:create, :show, :index]
  resources :cities, only: [:create, :show]
  resources :reviews, only: [:create]
  # get "/allrestaurants", to: "restaurants#index"
  get "/allreviews", to: "reviews#index"
  get "/allcities", to: "cities#index"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
    
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
