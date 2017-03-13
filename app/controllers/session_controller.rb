class SessionController < ApplicationController

	def sign_in
		p params[:user]
	end

	def sign_up
		
	end

	def sign_out
		
	end

	def user_params
		params[:user]
	end
end