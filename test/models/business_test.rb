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
#  price         :integer
#

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
