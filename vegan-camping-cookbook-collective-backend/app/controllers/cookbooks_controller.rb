class CookbooksController < ApplicationController
    def show
        cookbook = Cookbook.find_by(id: params[:id])
        if cookbook
            render json: cookbook
        else 
            render json: {message: "User not found."}
        end 
    end

    def index
        cookbooks = Cookbook.all
        render json: cookbooks
    end

    def cookbook
        cookbook = Cookbook.find(params[:id])
        cookbook.print_recipes = true 
        cookbook.save
        user = cookbook.user 
        
        new_cart = Cart.create(user_id: user.id)
        
        render json: user
    end
end
