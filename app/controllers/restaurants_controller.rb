class RestaurantsController < ApplicationController

    def create
        restaurant=Restaurant.create!(restaurant_params)
        render json: restaurant
    end

    private

    def restaurant_params
        params.permit(:city_id, :name, :cuisine, :seats)
    end
end
