# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  artist_name     :string
#  age             :integer
#  bio             :string
#  city            :string
#  country         :string
#  first_name      :string
#  last_name       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, uniqueness: true
  validates :artist_name, uniqueness: true, allow_nil: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }

  attr_accessor :password

  after_initialize :ensure_session_token

  has_many :tracks,
           foreign_key: :artist_id,
           class_name: :Track

  has_many :likes,
           foreign_key: :liker_id,
           class_name: :Like

  has_many :liked_tracks,
           through: :likes,
           source: :track

  #  SPIER

  def self.find_by_credentials(username, password)
    user = User.find_by(username:)
    return nil unless user&.is_password?(password)

    user
    # user.is_password?(password) ? user :nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    # scramble the old session_token
    self.session_token = SecureRandom.urlsafe_base64
    save
    self.session_token
  end
end
