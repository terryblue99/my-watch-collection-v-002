class CreateWatchComplicationJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :watches, :complications do |t|
      t.index [:watch_id, :complication_id]

      t.string :complication_description
    end
  end
end
