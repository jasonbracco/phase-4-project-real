class CitiesController < ApplicationController

    def index
        cities=City.all 
        render json: cities, include: ['restaurants', 'restaurants.reviews']
    end

    def create
        city=City.create!(city_params)
        render json: city
    end

    def show
        city=City.find(params[:id])
        render json: city
    end


    private

    def city_params
        params.permit(:name)
    end
end
