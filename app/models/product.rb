class Product < ApplicationRecord
	mount_base64_uploader :image, ImageUploader

	belongs_to :user
	belongs_to :status
	has_many :cart_items

	def inclu
	    return ['status', 'user']
	    #return params 
    end

end
