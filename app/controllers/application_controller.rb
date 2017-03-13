class ApplicationController < ActionController::API
	respond_to :json
	before_filter :permitir_parametros
  	
  	# No Rails 4 existe um mecanismo que regula o envio de parametros
  	# Utilizamos esse filtro para permitir o envio de qualquer tamanho de parametro
  	def permitir_parametros
  		params.permit!
  	end

		def authenticate
			p request.headers["token"]	
			if request.headers["token"].present?
	     		@user = User.find_by(token: request.headers["token"])
				
				if @user.name 
				end
			
			else
				
				@user = User.find_by(token: "")
				if @user.name 
				
				end
			end	

		
			rescue
				render status: :unprocessable_entity, json: {success: false, info: "Token invalido", data: {} } and return
		end
end
