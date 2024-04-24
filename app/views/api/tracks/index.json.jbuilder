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

    json.set! :comments do
      track.comments.each do |comment|
        json.set! comment.id do
          json.extract! comment, :id, :track_id, :commenter_id, :body, :created_at
          user = comment.user
          json.username user.username if user
          json.body comment.body
          json.created_at comment.created_at
        end
      end
    end
  end
end
