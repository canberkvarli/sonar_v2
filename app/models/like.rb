# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer          not null
#  track_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
  belongs_to :liker,
             class_name: :User,
             foreign_key: :liker_id

  belongs_to :track,
             class_name: :Track,
             foreign_key: :track_id
end
