class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :city_id, :name, :cuisine, :seats, :reviews

  has_many :reviews
end
