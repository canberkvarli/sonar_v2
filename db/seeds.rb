# rubocop:disable Lint/MissingCopEnableDirective
# rubocop:disable Security/Open

puts 'Cleaning...Seeding...'

# User.destroy_all
# Track.destroy_all
# Like.destroy_all

puts '🧘 Creating users...'

12.times do
  User.create!({
                 username: Faker::Internet.unique.username,
                 password_digest: 'password',
                 artist_name: Faker::Music.unique.band,
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

puts 'Users created.'

puts '🎧 Creating tracks...'

# image_urls = []
# 12.times do
#   image_urls = Faker::LoremFlickr.image(size: '800x800')
# end

# Define photo URLs in an array
photo_urls = [
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/cry.jpeg',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/1975.jpeg',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/darksun.jpeg',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/dense.jpeg',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/earth.jpg',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/glitch.jpeg',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/nyc.jpeg',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/pink_sea.jpeg',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/purple.png',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/red.jpeg',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/retro.jpeg',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/seaspan.jpeg'
]

# Define audio URLs in an array
audio_urls = [
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/What+remains+after+a+thunder+strike.mp3',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-a-voice-from-the-past-548.mp3',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-better-times-are-coming-173.mp3',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-cbpd-400.mp3',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-christmas-night-537.mp3',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-deep-techno-ambience-134.mp3',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-a-country-romance-36.mp3',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-deep-urban-623.mp3',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-house-vibes-129.mp3',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-lonely-in-the-bar-518.mp3',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-rock-the-game-49.mp3',
  'https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-love-in-the-air-41.mp3'
]

# Define track titles in an array
track_titles = [
  'W.R.A.A.T.S',
  'Boiler Plate',
  'Running with The Wolves',
  'Vampire',
  'Glass',
  'Gunta',
  'Earth',
  'Churchyard',
  'Warrior',
  'Mono',
  'Ebu bambeba',
  'Tataki'
]

track_titles.each_with_index do |title, i|
  # Select a random user who is an artist
  artist = User.where.not(artist_name: nil).order('RANDOM()').first

  next unless artist

  # Create the track with the selected artist's id
  track = Track.new(
    title:,
    artist_id: artist.id,
    description: Faker::Lorem.sentence
  )
  puts "Track #{title} created!"

  # Attach photo
  photo_file = URI.open(photo_urls[i])
  track.photo.attach(io: photo_file, filename: "photo_#{i + 1}.jpeg")

  # Attach audio
  audio_file = URI.open(audio_urls[i])
  track.audio.attach(io: audio_file, filename: "audio_#{i + 1}.mp3")

  track.save
end
