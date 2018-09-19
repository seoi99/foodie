json.review do
  json.partial! '/api/reviews/review', review: @review
end

json.user do
  json.partial! '/api/users/user', user: @review.user
end
json.business @review.business, business_name
json.average_rating @review.business.average_rating
