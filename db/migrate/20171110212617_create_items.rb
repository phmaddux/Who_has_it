class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :picture
      t.string :returned
      t.string :condition_outgoing
      t.string :condition_returned
      t.string :description
      t.references :user, foreign_key: true
      t.references :person, foreign_key: true

      t.timestamps
    end
  end
end
