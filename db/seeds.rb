# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

require 'aws-sdk-s3'

p 'Cleaning...Seeding...'
User.destroy_all
# Track.destroy_all
# Like.destroy_all

p 'Creating users...'

10.times do
  User.create!({
                 username: Faker::Internet.unique.username,
                 password_digest: 'password',
                 artist_name: Faker::Music::PearlJam.unique.musician,
                 age: rand(18..35),
                 bio: Faker::Lorem.paragraph,
                 city: Faker::Address.city,
                 country: Faker::Address.country,
                 first_name: Faker::Name.first_name,
                 last_name: Faker::Name.last_name
               })
end

# "demouser" is a special user that can be used to log in to the application.
User.create!({
               username: 'demouser',
               password: 'password'
             })

p 'Users created.'
