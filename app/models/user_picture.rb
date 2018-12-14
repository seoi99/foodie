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
  validate :ensure_photo

  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "Photo must be attached"
    end
  end

end
