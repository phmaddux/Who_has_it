class Api::PeopleController < ApplicationController
    def index
        @people = User.find(params[:user_id]).people.reverse
        render json: @people
    end
    def show
        @person = Person.find(params[:id])
        render json: @person
    end
    def create
        @user = User.find(params[:user_id])
        @person = Person.create!(person_params)
        render json: @person
    end
    def update
        @person = Person.find(params[:id])
        @person.update!(person_params)
        render json: @person
    end
    def destroy
        @person = Person.find(params[:id]).delete
        render status: :ok
    end
    private

    def person_params
        params.require(:person).permit(:nickname, :first_name, :last_name)
    end
end
