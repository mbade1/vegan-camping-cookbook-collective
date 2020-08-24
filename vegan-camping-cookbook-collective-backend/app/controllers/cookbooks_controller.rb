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
end
