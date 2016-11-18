class CreateEntries < ActiveRecord::Migration[5.0]
  def change
    create_table :entries do |t|
      t.decimal :amount
      t.string :description
      t.references :account, foreign_key: true

      t.timestamps
    end
  end
end
