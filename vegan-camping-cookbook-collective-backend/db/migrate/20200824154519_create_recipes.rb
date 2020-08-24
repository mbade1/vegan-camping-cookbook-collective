class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.integer :prep_time
      t.integer :cook_time
      t.integer :servings
      t.string :meal
      t.string :ingredients
      t.string :instructions
      t.string :image
      t.integer :upvotes

      t.timestamps
    end
  end
end
