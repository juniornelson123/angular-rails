class Product < ApplicationRecord
	belongs_to :user
	belongs_to :status
	has_many :cart_items

end
