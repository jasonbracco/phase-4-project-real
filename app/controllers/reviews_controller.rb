class ReviewsController < ApplicationController

    def create
        review=@current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    private

    def review_params
        params.permit(:user_id, :restaurant_id, :content)
    end
end
