# == Schema Information
#
# Table name: businesses
#
#  id            :bigint(8)        not null, primary key
#  business_name :string
#  full_address  :string
#  latitude      :float
#  longitude     :float
#  phone_number  :string
#  website       :string
#  category      :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Business < ApplicationRecord
  validates :business_name, :full_address, :latitude, :longitude, :category, presence: true
  has_many :hours
  has_many :images
end