class Watch < ApplicationRecord
  belongs_to :user
  has_one_attached :image

  validates :watch_name, :watch_maker, presence: true
  validate :image_nil

  def image_nil
    if !self.image.attached?
      self.image.attach(io: File.open(Rails.root.join('my-watch-collection-front', 'src', 'defaultWatchImage.png')), filename: 'defaultWatchImage.png' , content_type: 'image/png')
    end
  end

  def resized_image
    return self.image.variant(resize: '250x250!') # ! forces a resize to a square box
  end

end
