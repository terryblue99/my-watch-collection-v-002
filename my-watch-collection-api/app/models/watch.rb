class Watch < ApplicationRecord
  belongs_to :user, optional: true
  validates_presence_of :watch_name
  validates_presence_of :watch_maker
end
