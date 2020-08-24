Rails.application.routes.draw do
  resources :recipes, only: [:index, :show]
  resources :cookbook_recipes, only: [:index, :create, :destroy, :show]
  resources :cookbooks, only: [:index, :show]
  resources :users, only: [:create, :show, :index]

  post '/cookbook' => 'cookbooks#cookbook'

  get '/sort_breakfast' => 'recipes#sort_breakfast'
  get '/sort_lunch' => 'recipes#sort_lunch'
  get '/sort_dinner' => 'recipes#sort_dinner'
  get '/sort_snack' => 'recipes#sort_snack'
  get '/sort_dessert' => 'recipes#sort_dessert'
  get '/sort_upvotes' => 'recipes#sort_upvotes'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
