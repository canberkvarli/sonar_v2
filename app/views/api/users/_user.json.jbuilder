if user
  json.extract! user, :id, :username, :artist_name, :age, :bio, :city, :country, :first_name, :last_name

  json.likes do
    user.likes.each do |like|
      json.set! like.track_id do
        json.extract! like, :id, :track_id
        json.id like.id
      end
    end
  end
end
