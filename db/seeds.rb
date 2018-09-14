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

Business.create!(
  business_name: "Izakaya MEW",
  full_address: "38 W 39th St Midtown West",
  latitude: 40.752379,
  longitude: -73.984005,
  phone_number: "(212) 221-9002",
  category: "Restaurant"
)

Business.create!(
  business_name: "Cibo",
  full_address: "44 W 38th St Midtown West",
  latitude: 40.782379,
  longitude: -73.684005,
  phone_number: "(212) 223-9004",
  category: "Restaurant"
)

Image.create!(
  business_id: 1,
  img_url: "/Users/bumjuseo/Desktop/foodie/app/assets/images/alcohol.jpg"
)
Image.create!(
  business_id: 1,
  img_url: "/Users/bumjuseo/Desktop/foodie/app/assets/images/city.jpg"
)
Image.create!(
  business_id: 2,
  img_url: "/Users/bumjuseo/Desktop/foodie/app/assets/images/pizza.jpg"
)

DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

Business.all.length.times do |idx|
  DAYS.each do |day|
    if day == "Sat"
      Hour.create!(
        business_id: Business.all[idx].id,
        day: day,
        open: "9:00",
        close: "05:00"
      )
    else
      Hour.create!(
        business_id: Business.all[idx].id,
        day: day,
        open: "9:00",
        close: "10:00"
      )
    end
  end
end
