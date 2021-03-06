Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :recipes, only: [:index, :show, :create, :destroy, :update]
  resources :cookbooks, only: [:index, :show, :create, :destroy]
  resources :users do 
    resources :cookbooks
  end

  get '/sort_breakfast' => 'recipes#sort_breakfast'
  get '/sort_lunch' => 'recipes#sort_lunch'
  get '/sort_dinner' => 'recipes#sort_dinner'
  get '/sort_snack' => 'recipes#sort_snack'
  get '/sort_dessert' => 'recipes#sort_dessert'
  get '/sort_upvotes' => 'recipes#sort_upvotes'
  # post '/cookbook' => 'cookbooks#cookbook'

end
