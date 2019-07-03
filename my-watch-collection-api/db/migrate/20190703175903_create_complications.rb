class CreateComplications < ActiveRecord::Migration[5.2]
  def change
    create_table :complications do |t|

      t.string   :complication_name              
      t.string   :complication_description
      t.index    :complication_name

      t.timestamps
    end
  end
end
