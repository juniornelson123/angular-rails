class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]
  before_action :authenticate, only: [:index,:destroy,:create,:update,:show]
  # GET /products
  def index
    @products = Product.all

    render json: @products, include: @products.includes
  end

  # GET /products/1
  def show
    render json: @product, include: @product.includes
  end

  # POST /products
  def create
    @product = Product.new(product_params)

    if @product.save
      render status: 200, json: @product, include: @product.includes
    else 
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
     render status: 200, json: @product, include: @product.includes
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.status = 4
    if @product.update
     render status: 200, json: @product, include: @product.includes
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def product_params
      params.require(:product).permit!
    end
end
