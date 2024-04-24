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
require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
