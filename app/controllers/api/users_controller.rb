module Api
  class UsersController < ApplicationController
    # skip_before_action :verify_authenticity_token
    # protect_from_forgery with: :exception
    # signup

    def index
      @users = User.all
      render :index
    end

    def create
      @user = User.new(user_params)
      if @user.save
        login(@user)
        render json: @user
      else
        puts "User creation failed: #{@user.errors.full_messages}"
        render json: @user.errors.full_messages, status: 402
      end
    end

    def edit
      @user = User.find(params[:id])
      render :edit
    end

    def show
      @user = User.find_by(id: params[:id])
      render :show
    end

    def update
      @user = User.find(params[:id])
      if @user.update(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def destroy
      @user = User.find(params[:id])
      if @user.destroy
        render '/'
      else
        render plain: 'Nothing here to destroy.'
      end
    end

    def search
      @users = User.where("username LIKE '%#{params[:query]}%'")
      render json: @users
    end

    private

    # rubocop:disable Metrics/MethodLength
    def user_params
      params.require(:user).permit(
        :username,
        :password,
        :artist_name,
        :age,
        :gender,
        :bio,
        :city,
        :country,
        :first_name,
        :last_name
      )
    end
  end
end
