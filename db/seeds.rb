# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.destroy_all
Hour.destroy_all
Image.destroy_all
Review.destroy_all


Business.create!(
  business_name: "Izakaya MEW",
  full_address: "38 W 39th St Midtown West",
  latitude: 40.752157,
  price: 21,
  longitude: -73.984219,
  phone_number: "(212) 221-9002",
  category: "Japanese",
  website: "http://mewnyc.com/mew/",
)

Business.create!(
  business_name: "Pokeworks",
  full_address: "63 W 37th St New York, NY 10018",
  latitude: 40.7513478,
  longitude: -73.9837934,
  phone_number: "(212) 575-8881",
  category: "Japanese",
  website: "http://www.pokeworks.com/bryant-park/?utm_source=Yelp&utm_medium=Organic-Website",
  price: 14
)

Business.create!(
  business_name: "Sakura Of Japan",
  full_address: "570 8th Ave New York, NY 10018",
  latitude: 40.755812,
  longitude: -73.993139,
  phone_number: "(212) 398-4646",
  category: "Japanese",
  website: "http://sakuraofjapanmidtowneast.com/food-delivery-TW/sakura-of-japan-new-york-city.71.r?QueryStringValue=h4cRWrwWiGDTYE6Ta+SJLQ==",
  price: 21
)

Business.create!(
  business_name: "Inakaya",
  full_address: "231 W 40th St New York Times Bldg New York, NY 10018",
  latitude: 40.755902,
  longitude: -73.993064,
  phone_number: "(212) 354-2195",
  category: "Japanese, Sushi",
  website: "http://inakayany.com/",
  price: 34
)

Business.create!(
  business_name: "Hwaban",
  full_address: "55 W 19th St New York, NY 10011",
  latitude: 40.755820,
  longitude: -73.993192,
  phone_number: "(917) 261-2020",
  category: "Korean",
  website: "http://hwaban.com/",
  price: 33
)

Business.create!(
  business_name: "Her Name Is Han",
  full_address: "17 E 31st St New York, NY 10016",
  latitude: 40.755845,
  longitude: -73.993128,
  phone_number: "(212) 779-9990",
  category: "Korean, Dinner",
  website: "http://hernameishan.com",
  price: 16
)

Business.create!(
  business_name: "Take31",
  full_address: "15 E 31st St New York, NY 10016",
  latitude: 40.755877,
  longitude: -73.993064,
  phone_number: "(646) 398-9990",
  category: "Korean, Cocktail Bar",
  website: "http://hernameishan.com",
  price: 17
)

Business.create!(
  business_name: "Good Seed",
  full_address: "15 E 31st St New York, NY 10016",
  latitude: 40.755820,
  longitude: -73.993139,
  phone_number: "(347) 379-4855",
  category: "Salad, American",
  website: "http://goodseedsalad.com",
  price: 17
)

Business.create!(
  business_name: "La Gusto Pizza",
  full_address: "382 8th Ave New York, NY 10001",
  latitude: 40.749255,
  longitude: -73.995443,
  phone_number: "(646) 438-9200",
  category: "Pizza, Delivery",
  website: "http://lagusto.yolasite.com",
  price: 14
)


Business.create!(
  business_name: "ShakeShack",
  full_address: "335 W 37th St, New York, NY 10018",
  latitude: 40.754948,
  longitude: -73.993705,
  phone_number: "(646) 202-9715",
  category: "Fast Food",
  website: "http://shakeshack.com",
  price: 10
)


Review.create!(
  user_id: 4,
  business_id: Business.all[rand(9)].id,
  body: "Fast delivery and great price.",
  rating: 3)
Review.create!(
  user_id: 4,
  business_id: Business.all[rand(9)].id,
  body: "Highly recommend this place. Try the pasta and sushi",
  rating: 4)
Review.create!(
  user_id: 4,
  business_id: Business.all[rand(9)].id,
  body: "best poke in the town, order online to get your food quickly",
  rating: 5)
Review.create!(
  user_id: 2,
  business_id: Business.all[rand(9)].id,
  body: "Amazing food, prepared fresh and kind friendly staff.\n\nrecommend to try sushi burrito.",
  rating: 4)
Review.create!(
  user_id: 2,
  business_id: Business.all[rand(9)].id,
  body: "food is tasty, but it is too expensive.",
  rating: 3)
Review.create!(
  user_id: 2,
  business_id: Business.all[rand(9)].id,
  body: "fast foood!",
  rating: 2)

japaneseImageMap = Dir.glob("app/assets/images/japanese/*").map do |path|
   "assets/japanese/"+ File.basename(path)
end

koreanImageMap = Dir.glob("app/assets/images/korean/*").map do |path|
   "assets/korean/"+ File.basename(path)
end

deliveryImageMap = Dir.glob("app/assets/images/delivery/*").map do |path|
   "assets/delivery/"+ File.basename(path)
end

saladImageMap = Dir.glob("app/assets/images/salad/*").map do |path|
   "assets/salad/"+ File.basename(path)
end
fastfoodImageMap = Dir.glob("app/assets/images/fastfood/*").map do |path|
   "assets/fastfood/"+ File.basename(path)
end

Business.all.where("category like?", "%Japanese%").each do |biz|
  3.times do |idx|
    Image.create!(
      business_id: biz.id,
      img_url: japaneseImageMap.shift
    )
  end
end

Business.all.where("category like?", "%Korean%").each do |biz|
  3.times do |idx|
    Image.create!(
      business_id: biz.id,
      img_url: koreanImageMap.shift
    )
  end
end

Business.all.where("category like?", "%Salad%").each do |biz|
  3.times do |idx|
    Image.create!(
      business_id: biz.id,
      img_url: saladImageMap.shift
    )
  end
end

Business.all.where("category like?", "%Delivery%").each do |biz|
  3.times do |idx|
    Image.create!(
      business_id: biz.id,
      img_url: deliveryImageMap.shift
    )
  end
end

Business.all.where("category like?", "%Fast Food%").each do |biz|
  3.times do |idx|
    Image.create!(
      business_id: biz.id,
      img_url: fastfoodImageMap.shift
    )
  end
end




DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

Business.all.length.times do |idx|
  openRandom = (9 + rand(2)).to_s
  closeRandom = (17 + rand(DAYS.length)).to_s
  DAYS.each do |day|
    if day == "Sat"
      Hour.create!(
        business_id: Business.all[idx].id,
        day: day,
        open: (4 + rand(DAYS.length)).to_s + ":00",
        close: (17 + rand(DAYS.length)).to_s + ":00"
      )
    else
      Hour.create!(
        business_id: Business.all[idx].id,
        day: day,
        open: openRandom + ":00",
        close: closeRandom + ":00"
      )
    end
  end
end
