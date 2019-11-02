class ChangeCostToBeDecimalInWatches < ActiveRecord::Migration[5.2]
  def up
    change_column :watches, :cost, :decimal
  end
  def down
    change_column :watches, :cost, :string
  end
end

