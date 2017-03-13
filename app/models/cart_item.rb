class CartItem < ApplicationRecord
  belongs_to :product
  belongs_to :order

  def includes
    params = ['product', 'order']
    return params         
  end   
end
