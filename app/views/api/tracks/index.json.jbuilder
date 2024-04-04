# json.array! @tracks do |track|
  @tracks.each do |track| 
    json.set! track.id do 
      json.extract! track, :id, :title, :artist_id

    json.photoUrl url_for(track.photo) if track.photo.attached?
    json.audioUrl url_for(track.audio) if track.audio.attached?

      json.set! :likes do
        track.likes.each do |like|
          json.set! like.id do
            json.extract! like, :id, :track_id, :liker_id
            json.id like.id
          end
        end
      end
    end
end