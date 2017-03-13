class clientsController < ApplicationController
  before_action :set_client, only: [:show, :update, :destroy]
  before_action :authenticate, only: [:index,:destroy,:create,:update,:show]
  # GET /clients
  def index
    @clients = Client.all

    render json: @clients, include: @clients.includes
  end

  # GET /clients/1
  def show
    render json: @client, include: @client.includes
  end

  # POST /clients
  def create
    @client = Client.new(client_params)

    if @client.save
      render status: 200, json: @client, include: @client.includes
    else 
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /clients/1
  def update
    if @client.update(client_params)
     render status: 200, json: @client, include: @client.includes
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clients/1
  def destroy
    @client.status = 4
    if @client.update
     render status: 200, json: @client, include: @client.includes
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_client
      @client = Client.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def client_params
      params.require(:client).permit!
    end
end
