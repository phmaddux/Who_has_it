class Api::PeopleController < ApplicationController
    def index
        puts 'route hit'
        @people = User.find(params[:user_id]).people.distinct
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
        @person = Person.find(params[:id]).destroy
        render status: :ok
    end
    private

    def person_params
        params.require(:person).permit(:nickname)
    end
end
