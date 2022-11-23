class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :bio, presence: true, length: { minimum: 50 }
    validates :image_url, presence: true
    validates :name, presence: true
    validates :age, presence: true

    has_many :reviews
    has_many :restaurants, through: :reviews
    
end
