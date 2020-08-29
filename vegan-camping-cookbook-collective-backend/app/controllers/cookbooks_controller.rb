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
        user_id = params[:user_id]
        user = User.find(user_id)
        cookbooks = user.cookbooks
        #Take out doubled recipes, in case of bug. 
        unique = cookbooks.uniq{|r| r[:recipe_id]}
        render json: unique, include: [:recipe]
    end

    def create
        cookbook = Cookbook.new(cookbook_params)
        if cookbook.save
            render json: cookbook, except: [:created_at, :updated_at]
        else
            render json: {message: "Cookbook Creation Failed"}
        end
    end

    def destroy 
        cookbook_id = params[:id]
        cookbook = Cookbook.find(cookbook_id)
        cookbook.destroy
    end

    private 

    def cookbook_params
        params.require(:cookbook).permit(:user_id, :recipe_id, :email_recipes)
    end

end
