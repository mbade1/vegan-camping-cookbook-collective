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

    def create
        cookbook = Cookbook.new(cookbook_params)
        if cookbook.save
            render json: cookbook, except: [:created_at, :updated_at]
        else
            render json: {message: "Cookbook Creation Failed"}
        end
    end

    private 

    def cookbook_params
        params.require(:cookbook).permit(:user_id, :recipe_id, :email_recipes)
    end

end
