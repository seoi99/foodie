# == Schema Information
#
# Table name: hours
#
#  id          :bigint(8)        not null, primary key
#  business_id :integer
#  day         :string
#  open        :string
#  close       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class HourTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
