class CreateUserPhoto < ActiveRecord::Migration[5.2]
  def change
    create_table :user_photos do |t|
      t.timestamps
    end
  end
end
