# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  liker_id   :integer          not null
#  track_id   :integer          not null
#
# Indexes
#
#  index_likes_on_liker_id  (liker_id)
#  index_likes_on_track_id  (track_id)
#
require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
