class UsersController < ApplicationController
  def show
    user = User.find_by(id: params[:id])
    if user
      render json: user
    else 
      render json: {message: "User not found."}
    end 
  end

  def index
    user = User.all
    render json: user
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, except: [:created_at, :updated_at]
    else
      render json: {message: "Signup Failed"}
    end
  end

  def show
    user = User.find_by(id: params[:id])
    if user
      render json: user, except: [:created_at, :updated_at]
    else
      render json: {message: "User could not be found."}
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
