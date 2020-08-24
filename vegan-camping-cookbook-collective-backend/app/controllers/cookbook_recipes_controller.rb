class CookbookRecipesController < ApplicationController
    def index
        cookbook_recipes = CookbookRecipe.all
        render json: cookbook_recipes
    end

    def show 
        cookbook_recipes = CookbookRecipe.find_by(id: params[:id])
        render json: cookbook_recipes
    end
end
# resources :cookbook_recipes, only: [:index, :create, :destroy, :show]
