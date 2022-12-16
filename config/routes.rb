Rails.application.routes.draw do
  get "/new", to: "notes#new"
  resources :notes
  root "notes#index"

  namespace :api do
    resources :notes
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
