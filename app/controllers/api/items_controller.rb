class Api::ItemsController < ApplicationController
    def index
        if params[:person_id]
            @items = Person.find(params[:person_id]).items
            render json: @items
        elsif params[:user_id]
            @items = User.find(params[:user_id]).items.
            render json: @items
        end
    end
    def show
        @item = Item.find(params[:id])
        render json: @item
    end
    def create
        @user = User.find(params[:user_id])
        @person = Person.find(params[:person_id])
        @item = Item.create!(item_params)
        render json: @item
    end
    def update
        @item = Item.find(params[:id])
        @item.update!(item_params)
        render json: @item
    end
    def destroy
        @item = Item.find(params[:id]).delete
        render status: :ok
    end
    private

    def item_params
        params.require(:item).permit(:name, :description, :user_id, :person_id)
    end
end
