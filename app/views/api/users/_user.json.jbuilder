json.extract! user, :id, :username, :firstname, :lastname, :zipcode, :date, :month, :year
json.photoUrl url_for(user.photo)
