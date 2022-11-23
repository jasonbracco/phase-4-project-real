class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    #post: signup
    def create
        user-User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :bio, :age, :name, :image_url)
    end


end
