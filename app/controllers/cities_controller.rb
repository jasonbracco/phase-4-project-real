class CitiesController < ApplicationController

    def create
        city=City.create!(city_params)
        render json: city
    end

    private

    def city_params
        params.permit(:name)
    end
end
