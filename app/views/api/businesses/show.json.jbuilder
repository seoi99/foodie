json.business do
  json.extract! @business, :business_name, :full_address, :latitude, :longitude, :category, :hour_ids, :image_ids
end
