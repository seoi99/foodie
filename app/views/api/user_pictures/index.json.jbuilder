@userPictures.each do |userPicture|
      json.set! userPicture.user_id do
        json.extract! userPicture, :id
        json.photoUrl url_for(userPicture.photo)
      end
end
