class CreateCookbooks < ActiveRecord::Migration[6.0]
  def change
    create_table :cookbooks do |t|
      t.boolean :print_recipes
      t.integer :user_id

      t.timestamps
    end
  end
end
