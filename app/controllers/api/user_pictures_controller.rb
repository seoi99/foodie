class Api::UserPicturesController < ApplicationController

<<<<<<< HEAD

  def show
    @userPicture = UserPicture.find_by(user_id: params[:id])
=======
  before_action :require_logged_in

  def show
    @userPicture = UserPicture.find_by(user_id: params[:id])

>>>>>>> ffc86eff251a60724b78e84e4a788c0d044846df
    if @userPicture
      render 'api/user_pictures/show'
    else
      render json: {message: "no profile picture yet"}
    end
  end

  def index
    @userPictures = UserPicture.all
  end

  def create
<<<<<<< HEAD
    
=======
<<<<<<< HEAD
    debugger
>>>>>>> cc03632b54d202dc8668b231875ca08e15bba208
    @userPicture = UserPicture.new(post_params)
=======
    @userPicture = UserPicture.new(post_params)
    unless UserPicture.where(user_id: current_user.id).empty?
      UserPicture.where(user_id: current_user.id).destroy_all
    end
>>>>>>> ffc86eff251a60724b78e84e4a788c0d044846df
    @userPicture.user_id = current_user.id
    if @userPicture.save
      render 'api/user_pictures/show'
    else
      render json: @userPicture.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @userPicture = UserPicture.find(params[:id])
    @userPicture.destroy
    render json: {message: "photo deleted"}
  end

  private

  def post_params
    params.require(:user_picture).permit(:photo, :user_id)
  end

end
