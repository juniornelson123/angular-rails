class Api::SessionsController < ApplicationController
	before_action :authenticate, only: [:sign_out]
	def sign_in
		puts "***************|Login|*******************"
		
    @user = User.find_by_email(params[:user][:email])

    if @user.present? && @user.valid_password?(params[:user][:password])
      puts "***************|user presente|*******************"

      @user.update_column(:token, SecureRandom.uuid)
      warden.set_user @user

      render :status => 200, json: @user, include: @user.includes
			
      

    else
      puts "***************|user error|*******************"
      render :status => 401, json: {
          success: false,
          info: "Usuario ou senha não existem",
          data: {}
      }
    end
	end

	def sign_up
		p params[:user]

		@user = User.new(params[:user])

		if @user.save
			render :status => 200, json: @user, include: @user.includes
			
		else
			render :status => 401, json: {
	          success: false,
	          info: @errors.errors.full_messages.join(", "),
	          data: {}
	      	}
		end	
	end

	def sign_out
		@user = User.find(params[:id])

		@user.update_column(:token, nil)
		warden.set_user @user

		render :status => 200, json: {
			info: "Logout efetuado com sucesso",
			success: true,
			data: {}
		}
		
	end

	def user_params
		params[:user]
	end
end