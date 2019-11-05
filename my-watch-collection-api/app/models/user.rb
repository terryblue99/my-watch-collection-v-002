class User < ApplicationRecord
  has_secure_password
  has_many :watches, dependent: :delete_all # dependent: :delete_all causes all the associated
                                            # watches to be deleted directly from the database
                                            # when .destroy is used on the user

  validates_presence_of :email
  validates_uniqueness_of :email
  validates :password,  :presence => true,
                        :confirmation => true,
                        :length => {:within => 8..20},
                        :on => :create
  validates :password,  :confirmation => true,
                        :length => {:within => 8..20},
                        :allow_blank => true,
                        :on => :update
end
