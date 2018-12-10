class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all
    @YelpApiBusiness = YelpApiBusiness.first.yelp_businesses
  end

  def show
    @business = Business.find(params[:id])
  end

  def search
    if params[:result] != "undefined"
      @businesses = Business.where("business_name ILIKE ? ", "%#{params[:result]}%")
    else
      @businesses = Business.all
    end
    render :index
  end

  private
  def business_params
    params.require(:business).permit(:business_name, :full_address, :latitude, :longitude, :category)
  end
end
