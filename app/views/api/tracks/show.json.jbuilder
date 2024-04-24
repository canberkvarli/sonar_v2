json.id @track.id
json.title @track.title

json.extract! @track, :id, :title, :description, :image, :artist_id

json.photoUrl url_for(@track.photo) if @track.photo.attached?
json.audioUrl url_for(@track.audio) if @track.audio.attached?

json.set! :likes do
  @track.likes.each do |like|
    json.set! like.id do
      json.extract! like, :id, :track_id, :liker_id
      json.id like.id
    end
  end
end

json.set! :comments do
  @track.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :track_id, :commenter_id, :body, :created_at
      json.commenter_id comment.commenter_id
      json.body comment.body
      json.created_at comment.created_at
    end
  end
end
