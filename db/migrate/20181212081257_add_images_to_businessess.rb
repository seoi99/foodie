class AddImagesToBusinessess < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :images, :string, array: true, default: []
  end
end
