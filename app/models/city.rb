class City < ApplicationRecord

    has_many :restaurants

    validates :name, presence: true
    
end
