class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |t|
      t.string :nickname
      t.string :first_name
      t.string :last_name
      t.string :picture
      t.string :phone_number
      t.string :email
      t.boolean :would_lend_again
      t.boolean :would_not_lend_again
      t.string :notes

      t.timestamps
    end
  end
end
