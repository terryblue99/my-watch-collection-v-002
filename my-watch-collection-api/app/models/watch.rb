class Watch < ApplicationRecord
  validates :watch_name, presence: true
 	validates :watch_maker, presence: true
end
