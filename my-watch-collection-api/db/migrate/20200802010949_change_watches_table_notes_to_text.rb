class ChangeWatchesTableNotesToText < ActiveRecord::Migration[5.2]
  def change
    change_column :watches, :notes, :text
  end
end
