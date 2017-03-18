class Product < ApplicationRecord
	mount_base64_uploader :image, ImageUploader

	belongs_to :user
	belongs_to :status
	has_many :cart_items

	def inclu
	    return ['status', 'user']
	    #return params 
    end

    scope :active, -> { where("status_id != ?", 4).order(id: :desc) }
  
    before_create :set_status

	def set_status
	  self.status_id = 1
	end
end
