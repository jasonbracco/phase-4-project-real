class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.belongs_to :city, null: false, foreign_key: true
      t.string :cuisine
      t.string :name
      t.ineteger :seats
      t.timestamps
    end
  end
end
