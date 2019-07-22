class RemoveUserIdFromWatches < ActiveRecord::Migration[5.2]
  def change
    remove_column :watches, :user_id, :integer
  end
end
