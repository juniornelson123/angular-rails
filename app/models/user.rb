class User < ApplicationRecord

  enum role: { admin: 1, costumer: 2 }

	has_many :products
  has_many :clients
	has_many :orders
	belongs_to :status
  belongs_to :manager, class_name: "User",
                        foreign_key: "manager_id"
	has_many :dependents, class_name: "User",
                        foreign_key: "manager_id"

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def includes
    params = ['manager', 'dependents', 'products', 'orders', 'status', 'clients']
    return params         
  end       
end
