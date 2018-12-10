# == Schema Information
#
# Table name: yelp_api_businesses
#
#  id              :bigint(8)        not null, primary key
#  yelp_businesses :json
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class YelpApiBusiness < ApplicationRecord
  validates :yelp_businesses, presence: true

  API_HOST = "https://api.yelp.com"
  SEARCH_PATH = "/v3/businesses/search"
  BUSINESS_PATH = "/v3/businesses/"
  SEARCH_LIMIT = 50
  API_KEY = Rails.application.credentials.yelp_api

  def search(term, location)
    url = "#{API_HOST}#{SEARCH_PATH}"
    params = {
      term: term,
      location: location,
      limit: SEARCH_LIMIT
    }

    response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)
    self.yelp_businesses = response.parse["businesses"]
    self.save
  end

end
