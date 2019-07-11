class Watch < ApplicationRecord
    has_many :complications_watches
  	has_many :complications, through: :complications_watches
  	validates :watch_name, presence: true
 	validates :watch_maker, presence: true
end
