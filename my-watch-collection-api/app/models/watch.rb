class Watch < ApplicationRecord
  validates_presence_of :watch_name
  validates_presence_of :watch_maker
end
