class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: recipes
  end

  def show
    recipe = Recipe.find_by(id: params[:id])
    render json: recipe
  end

  def create 
    recipe = Recipe.new(recipe_params)
    if recipe.save
      render json: recipe
    else 
      render json: {message: "Recipe could not be added"}
    end
  end

  def update 
    recipe = Recipe.find_by(:id => params[:id])
    recipe.upvotes += 1;
    render json: recipe
  end

  def destroy
    recipes = Recipe.all
    recipe = Recipe.find(id: params[:id])
    recipe.upvotes -= 1;
    render json: recipes
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

  private

  def recipe_params
    params.require(:recipe).permit(:title, :prep_time, :cook_time, :servings, :meal, :ingredients, :instructions, :image, :upvotes)
  end
end
