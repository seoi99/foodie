class DeleteUSerPhotoTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :user_photos
  end
end
