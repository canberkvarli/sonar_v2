module Api
  class SessionsController < ApplicationController
    # skip_before_action :verify_authenticity_token
    # protect_from_forgery except: :destroy

    def create
      @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

      if @user
        login(@user)
        render json: @user
      else
        render json: ['Invalid username/password combination'], status: 401
      end
    end

    # def destroy
    #     @user = current_user
    #     if @user
    #         logout
    #         render '/'
    #     else
    #         render json: ["Nobody signed in"], status: 404
    #     end
    # end

    def destroy
      logout
      render json: { message: 'Logout successfull' }
    end
  end
end
