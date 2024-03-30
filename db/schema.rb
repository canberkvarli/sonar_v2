# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

# rubocop:disable Style/StringLiterals
# rubocop:disable Metrics/BlockLength
# rubocop:disable Style/NumericLiterals
ActiveRecord::Schema[7.1].define(version: 2024_03_30_005927) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "likes", force: :cascade do |t|
    t.integer "liker_id", null: false
    t.integer "track_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["liker_id"], name: "index_likes_on_liker_id"
    t.index ["track_id"], name: "index_likes_on_track_id"
  end

  create_table "tracks", force: :cascade do |t|
    t.integer "artist_id", null: false
    t.string "title", null: false
    t.string "description"
    t.string "image"
    t.string "string"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index %w[artist_id title], name: "index_tracks_on_artist_id_and_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "artist_name"
    t.integer "age"
    t.string "bio"
    t.string "city"
    t.string "country"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index %w[username artist_name], name: "index_users_on_username_and_artist_name"
  end
end
