class Status < ApplicationRecord
	has_one :product	
	has_one :client	
	has_one :user	
end
