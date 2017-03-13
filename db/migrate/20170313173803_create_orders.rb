class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.references :user, foreign_key: true
      t.references :status, foreign_key: true
      t.datetime :payment_date
      t.string :code
      t.float :value

      t.timestamps
    end
  end
end
