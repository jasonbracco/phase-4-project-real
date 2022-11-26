class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :image_url, :age
end
