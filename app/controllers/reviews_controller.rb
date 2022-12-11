class ReviewsController < ApplicationController

    def index
        reviews=Review.all 
        render json: reviews
    end

    def create
        review=Review.create!(review_params)
        session[:user_id] = review.user_id 
        render json: review, status: :created
    end

    def index
        review=Review.find_by(params[:id])
        render json: review

    private

    def review_params
        params.permit(:restaurant_id, :content, :user_id)
    end
end
