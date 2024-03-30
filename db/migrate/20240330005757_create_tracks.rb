class CreateTracks < ActiveRecord::Migration[7.1]
  def change
    create_table :tracks do |t|
      t.integer :artist_id, null: false
      t.string :title, null: false
      t.string :description
      t.string :image, :string

      t.timestamps
    end
    add_index :tracks, %i[artist_id title]
  end
end
