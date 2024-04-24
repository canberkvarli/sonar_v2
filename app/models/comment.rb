# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  body         :string           not null
#  commenter_id :integer          not null
#  track_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Comment < ApplicationRecord
  belongs_to :user,
             foreign_key: :commenter_id,
             class_name: :User

  belongs_to :track,
             foreign_key: :track_id,
             class_name: :Track

  validates :body, presence: true
end
