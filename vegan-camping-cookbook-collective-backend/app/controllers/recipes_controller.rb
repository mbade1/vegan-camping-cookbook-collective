class RecipesController < ApplicationController
    def index
        recipes = Recipe.all
        render json: recipes
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: recipe
    end

    def sort_breakfast 
        breakfast = Recipe.all.select{|recipe| recipe.meal == "breakfast"}
        render json: breakfast
    end

    def sort_lunch
        lunch = Recipe.all.select{|recipe| recipe.meal == "lunch"}
        render json: lunch
    end

    def sort_dinner
        dinner = Recipe.all.select{|recipe| recipe.meal == "dinner"}
        render json: dinner

    end

    def sort_snack
        snack = Recipe.all.select{|recipe| recipe.meal == "snack"}
        render json: snack
    end

    def sort_dessert
        dessert = Recipe.all.select{|recipe| recipe.meal == "dessert"}
        render json: dessert
    end

    def sort_upvotes
        sorted = Recipe.all.sort_by{|plant| plant.upvotes }   
        render json: sorted.reverse
    end
end
