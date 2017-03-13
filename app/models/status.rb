class Status < ApplicationRecord
	has_one :product	
	has_one :client	
	has_one :user	

	def includes
    params = ['user','client', 'user']
    return params         
  end   

end
