class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all
    @YelpApiBusiness = YelpApiBusiness.first.yelp_businesses
  end

  def show
    @business = Business.find(params[:id])
  end

  def search
    @businesses = Business.where("business_name ILIKE ? ", "%#{params[:result]}%")
    render :index
  end

  private
  def business_params
    params.require(:business).permit(:business_name, :full_address, :latitude, :longitude, :category)
  end
end
