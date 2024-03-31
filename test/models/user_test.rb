# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  age             :integer
#  artist_name     :string
#  bio             :string
#  city            :string
#  country         :string
#  first_name      :string
#  last_name       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_username_and_artist_name  (username,artist_name)
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end