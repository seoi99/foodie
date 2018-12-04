class Api::BusinessesController < ApplicationController

  def index
    sleep 0.5
    @businesses = Business.all
  end

  def show
    @business = Business.find(params[:id])
  end

  def search
    @businesses = Business.where(' name ILIKE ?')
  end

  private
  def business_params
    params.require(:business).permit(:business_name, :full_address, :latitude, :longitude, :category)
  end
end
