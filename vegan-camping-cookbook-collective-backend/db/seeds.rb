# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(name: 'Mike', email: 'mike@gmail.com')
user2 = User.create(name: 'Larry', email: 'larry@gmail.com')

cookbook1 = Cookbook.create(user_id: 1, print_recipes: false)
cookbook2 = Cookbook.create(user_id: 1, print_recipes: false)
cookbook3 = Cookbook.create(user_id: 2, print_recipes: false)
cookbook4 = Cookbook.create(user_id: 2, print_recipes: false)


cookbook_recipes1 = CookbookRecipe.create(cookbook_id: 1, recipe_id: 1)
cookbook_recipes2 = CookbookRecipe.create(cookbook_id: 1, recipe_id: 2)
cookbook_recipes3 = CookbookRecipe.create(cookbook_id: 1, recipe_id: 3)

recipe1 = Recipe.create(title: 'Banana Coconut French Toast', prep_time: 10, cook_time: 20, servings: 4, meal: 'breakfast', 
ingredients: "1 lb loaf crusty French bread, cut into ¾ slices, 1 very ripe banana, 1 (14 oz) can coconut milk, 1 teaspoon ground cinnamon, 1 teaspoon vanilla extract, 1/2 teaspoon salt, coconut oil",
instructions: "1. In a container large enough to accommodate a slice or two of bread, mash the banana until it's smooth. Add the coconut milk, cinnamon, vanilla extract, and salt and whisk to combine. You want this batter to be as smooth as possible. 
2. Heat a non-stick skillet over medium heat.
3. Dip a slice of bread into the batter and let it soak for a few seconds on each side. Let the excess drip off and then fry it in the skillet until golden and crispy on each side, about 3 minutes per side.
4. Repeat with the rest of the bread, adding coconut oil to the skillet as needed.
5. Serve with syrup, fresh blueberries, and shredded coconut. Enjoy!",
image: "https://www.freshoffthegrid.com/wp-content/uploads/Coconut-Milk-Vegan-French-Toast-2.jpg",
upvotes: 10)

recipe2 = Recipe.create(title: 'Johnny Apple Seed Oatmeal', prep_time: 2, cook_time: 10, servings: 2, meal: 'breakfast',
ingredients: "2 cups water, 
pinch salt, 
1 cup rolled oats, 
1 medium apple, diced into 1/2 cubes, 
1/2 teaspoon ground cinnamon, 
1/4 teaspoon ground nutmeg, 
1/4 teaspoon ground cloves, 
1/4 teaspoon allspice, 
2 tablespoons hemp flax or chia seeds (we use a blend of equal parts hemp flax and chia), 
2 tablespoons maple syrup",
instructions: "1. Heat the water and salt into a medium pot until it comes to a boil.
2. Add the oats, simmer for about ten minutes, or until the oats are tender, stirring occasionally. Halfway through the cooking time, add the apple, spices, and maple syrup.",
image: "https://www.freshoffthegrid.com/wp-content/uploads/2015/10/apple-oatmeal-7.jpg",
upvotes: 7)
