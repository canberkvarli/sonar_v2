# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  artist_id   :integer          not null
#  title       :string           not null
#  description :string
#  image       :string
#  string      :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Track < ApplicationRecord
  validates :title, presence: true

  has_one_attached :photo
  has_one_attached :audio

  belongs_to :uploader,
             foreign_key: :artist_id,
             class_name: :User

  has_many :likes,
           class_name: :Like,
           foreign_key: :track_id

  has_many :likers,
           through: :likes,
           source: :liker

  has_many :comments,
           class_name: :Comment,
           foreign_key: :track_id

  has_many :commenters,
           through: :comments,
           source: :commenter

  def self.track_num_likes
    tracks_with_likes = Track
                        .select('tracks.*, COUNT(*) AS num_likes')
                        .joins(:likes)
                        .group(:id)

    tracks_with_likes.each do |track|
      puts track.num_likes
    end
  end
end
