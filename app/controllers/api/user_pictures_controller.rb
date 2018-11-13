class Api::UserPicturesController < ApplicationController

  before_action :require_logged_in

  def show
    @userPicture = UserPicture.find_by(user_id: params[:id])

    if @userPicture
      render 'api/user_pictures/show'
    else

      render json: {message: "no profile picture yet"}
    end
  end

  def create
    @userPicture = UserPicture.new(post_params)
    unless UserPicture.where(user_id: current_user.id).empty?
      UserPicture.where(user_id: current_user.id).delete_all
    end
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
