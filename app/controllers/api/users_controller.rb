class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end
    def show
        if params[:id][0]  =~ /[A-Za-z]/
            @user = User.find_by_username(params[:id])
            render json: @user
        else
            @user = User.find(params[:id])
            render json: @user
        end
    end
    def create
        @user = User.create!(user_params)
        render json: @user
    end
    def update
        @user = User.find(params[:id])
        @user.update!(user_params)
        render json: @user
    end
    def destroy
        @user = User.find(params[:id]).destroy
        render status: :ok
    end

    private
    def user_params
        params.require(:user).permit(:username, :picture, :password, :email)
    end
end