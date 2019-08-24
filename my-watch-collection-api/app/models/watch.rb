class Watch < ApplicationRecord
  belongs_to :user
  has_one_attached :image

  validates :watch_name, :watch_maker, presence: true
  validate :image_attached

  def image_attached
    if !self.image.attached?
      self.image.attach(io: File.open(Rails.root.join('my-watch-collection-front', 'src', 'defaultWatchImage.png')), filename: 'defaultWatchImage.png' , content_type: 'image/png')
    # else  
    #   self.image.variant(resize: '300x300!').processed # ! & .processed forces a resize if needed
    end
  end

  def image_resize

  end  

end
