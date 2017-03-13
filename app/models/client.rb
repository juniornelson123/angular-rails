class Client < ApplicationRecord
 	belongs_to :user
	belongs_to :status

	def includes
    params = ['status', 'user']
    return params         
  end   
end
