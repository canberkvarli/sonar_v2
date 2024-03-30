class CreateUsers < ActiveRecord::Migration[7.1]
  def change # rubocop:disable Metrics/MethodLength
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :artist_name
      t.integer :age
      t.string :bio
      t.string :city
      t.string :country
      t.string :first_name
      t.string :last_name

      t.timestamps
    end
    add_index :users, %i[username artist_name]
  end
end
