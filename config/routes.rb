Rails.application.routes.draw do
  namespace :frontend do
    post "/login", to: "sessions#create"
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
