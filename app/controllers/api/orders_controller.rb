class Api::OrdersController < ApplicationController
  before_action :set_order, only: [:show, :update, :destroy]
  before_action :authenticate, only: [:index,:destroy,:create,:update,:show]
  # GET /orders
  def index
    @orders = Order.all

    render json: @orders, include: @orders.includes
  end

  # GET /orders/1
  def show
    render json: @order, include: @order.includes
  end

  # POST /orders
  def create
    @order = Order.new(order_params)

    if @order.save
      render status: 200, json: @order, include: @order.includes
    else 
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
     render status: 200, json: @order, include: @order.includes
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.status = 4
    if @order.update
     render status: 200, json: @order, include: @order.includes
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def order_params
      params.require(:order).permit!
    end
end
