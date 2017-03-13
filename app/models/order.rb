class Order < ApplicationRecord
  belongs_to :user
  belongs_to :status

	has_many :cart_items

	def includes
    params = ['user','cart_items', 'status']
    return params         
  end   

end
