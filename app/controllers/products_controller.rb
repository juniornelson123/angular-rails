class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]
  before_action :authenticate, only: [:index, :destroy,:create,:update,:show]
  # GET /products
  def index
    @products = Product.active

    render json: @products, include: ['status', 'user', 'cart_items']
  end

  # GET /products/1
  def show
    render json: @product, include: ['status', 'user', 'cart_items']
  end

  # POST /products
  def create
    @product = Product.new(product_params)
    @product.status_id = 1
    if @product.save!
      render status: 200, json: @product, include: ['status', 'user', 'cart_items']
    else 
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
     render status: 200, json: @product, include: ['status', 'user', 'cart_items']
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.status_id = 4
    if @product.save!
     render status: 200, json: @product, include: ['status', 'user', 'cart_items']
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
