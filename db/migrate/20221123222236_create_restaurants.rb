class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.integer :city_id
      t.string :cuisine
      t.string :name
      t.integer :seats
      t.timestamps
    end
  end
end
