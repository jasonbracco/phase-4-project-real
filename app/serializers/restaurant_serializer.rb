class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :city_id, :name, :cuisine, :seats
end
