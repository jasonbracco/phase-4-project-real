class Restaurant < ApplicationRecord

    belongs_to :city
    has_many :reviews
    has_many :users, through: :reviews

    validates :city_id, presence: true
    validates :name, presence: true
    validates :cuisine, presence: true    
    validates :seats, presence: true
    
end
