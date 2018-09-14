# == Schema Information
#
# Table name: images
#
#  id          :bigint(8)        not null, primary key
#  business_id :integer
#  img_url     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
