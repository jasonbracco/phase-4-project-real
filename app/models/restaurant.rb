class Restaurant < ApplicationRecord

    belongs_to :city
    has_many :reviews
    has_many :users, through: :reviews
    
end
