class Review < ApplicationRecord

    belongs_to :user
    belongs_to :restaurant

    validates :restaurant_id, presence: true
    validates :content, presence: true
    validates :user_id, presence: true


        
end
