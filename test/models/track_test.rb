# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  description :string
#  image       :string
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  artist_id   :integer          not null
#
# Indexes
#
#  index_tracks_on_artist_id_and_title  (artist_id,title)
#
require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
