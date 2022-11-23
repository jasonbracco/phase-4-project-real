Rails.application.routes.draw do
  resources :restaurants
  resources :cities
  resources :reviews
  namespace :frontend do
    post "/login", to: "sessions#create"
    post "/signup", to: "users#create"
  end




  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
