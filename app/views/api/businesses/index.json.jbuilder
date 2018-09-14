  @businesses.each do |business|
    json.set! business.id do
      json.extract! business, :business_name, :full_address, :latitude, :longitude, :category
      business.images.each do |image|
        json.extract! image, :id, :img_url
      end
      business.hours.each do |hour|
        json.extract! hour, :day, :open, :close
      end
    end

  end
