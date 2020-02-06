class AddDefaultToCostInWatches < ActiveRecord::Migration[5.2]
  def up
    change_column :watches, :cost, :decimal, :precision => 8, :scale => 2, default: 0.00
  end
  def down
    change_column :watches, :cost, :decimal, :precision => 8, :scale => 2
  end
end
