class UserPicture < ApplicationRecord
  validate :ensure_photo

  belongs_to :user
  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "Photo must be attached"
    end
  end
end
