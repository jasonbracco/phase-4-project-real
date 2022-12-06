class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :city_id, :name, :cuisine, :seats

  has_many :reviews
end
