class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :restaurant_id, :content, :restaurant

  belongs_to :restaurant
end
