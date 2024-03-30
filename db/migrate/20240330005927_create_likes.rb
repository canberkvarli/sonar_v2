class CreateLikes < ActiveRecord::Migration[7.1]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :track_id, null: false

      t.timestamps
    end
    add_index :likes, :liker_id
    add_index :likes, :track_id
  end
end
