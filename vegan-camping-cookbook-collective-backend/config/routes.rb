Rails.application.routes.draw do
  resources :recipes
  resources :cookbook_recipes, only: [:index, :create, :destroy, :show]
  resources :cookbooks, only: [:index, :show]
  resources :users, only: [:create, :show, :index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/test', to: 'application#test'
end
