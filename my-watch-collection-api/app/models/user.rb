class User < ApplicationRecord
  has_secure_password
  validates_presence_of :email
  validates_uniqueness_of :email

  validates :password,  :presence => true,
                        :confirmation => true,
                        :length => {:within => 8..20},
                        :on => :create
  validates :password,  :confirmation => true,
                        :length => {:within => 8..20},
                        :allow_blank => false,
                        :on => :update
end
