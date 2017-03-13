class AddColumnStatusToClients < ActiveRecord::Migration[5.0]
  def change
    add_reference :clients, :status, foreign_key: true
  end
end
