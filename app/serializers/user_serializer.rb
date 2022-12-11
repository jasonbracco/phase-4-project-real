class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :image_url, :age, :name, :reviews

  has_many :reviews
end
