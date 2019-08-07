class Watch < ApplicationRecord
  belongs_to :user

  validates :watch_name, :watch_maker, presence: true
end
