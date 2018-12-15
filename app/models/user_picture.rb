# == Schema Information
#
# Table name: user_pictures
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserPicture < ApplicationRecord
<<<<<<< HEAD
  validates :user_id, presence: true
  belongs_to :user
  has_one_attached :photo

=======
  validate :ensure_photo

  belongs_to :user
  has_one_attached :photo

  def ensure_photo
    
    unless self.photo.attached?
      errors[:photo] << "Photo must be attached"
    end
  end
>>>>>>> ffc86eff251a60724b78e84e4a788c0d044846df
end
