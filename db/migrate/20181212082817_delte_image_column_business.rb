class DelteImageColumnBusiness < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :images
  end
end
