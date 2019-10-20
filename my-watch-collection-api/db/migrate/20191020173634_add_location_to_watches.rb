class AddLocationToWatches < ActiveRecord::Migration[5.2]
  def change
    add_column :watches, :location, :string
  end
end
