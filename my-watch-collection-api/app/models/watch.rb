class Watch < ApplicationRecord
  belongs_to :user
  has_one_attached :image

  validates :watch_name, :watch_maker, presence: true
  validate :image_attached

  def image_attached
    # Checks if a watch image has been selected  
    # and if not, a default image is stored
    if !self.image.attached?
      self.image.attach(io: File.open(Rails.root.join('my-watch-collection-front', 'src/images', 'defaultWatchImage.png')), filename: 'defaultWatchImage.png' , content_type: 'image/png')
    end
  end
  
end
