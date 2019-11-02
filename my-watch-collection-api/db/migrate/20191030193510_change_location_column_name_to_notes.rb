class ChangeLocationColumnNameToNotes < ActiveRecord::Migration[5.2]
  def up
    rename_column :watches, :location, :notes
  end
  def down
    rename_column :watches, :notes, :location
  end
end
