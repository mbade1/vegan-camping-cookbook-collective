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

recipe3 = Recipe.create(title: 'Peanut Butter and Jelly Bars', prep_time: 5, cook_time: 28, servings: 6, meal: 'snack',
ingredients: "1 ½ cup rolled oats
½ cup jam
¼ cup peanut butter
2 tablespoons brown sugar
1 tablespoon coconut oil
¼ teaspoon salt
¼ cup chopped peanuts",
instructions: "Preheat the oven to 350. Line a 9X5 loaf pan with parchment paper or foil.
Spread the oats on a baking sheet and toast in the oven for 10 minutes, stirring at the 5 minute mark to ensure they toast evenly. Remove from the oven and set aside.
Heat the jam, peanut butter, sugar, oil, and salt in a small saucepan. Simmer for about 3 minutes over medium heat until slightly thickened, stirring constantly. Dump the toasted oats into the pot and stir to thoroughly coat.
Transfer the mixture to the lined loaf pan in an even layer. Press the chopped peanuts into the top of the mixture.
Bake the bars for 15 minutes until golden brown. Remove from the oven and allow to cool. Remove the bars from the pan and cut into bars using a sharp knife.",
image: "https://freshoffthegrid.com/wp-content/uploads/2017/07/peanut-butter-jelly-bar-vegan-glutenfree.jpg",
upvotes: 5)

recipe4 = Recipe.create(title: 'Smores Granola Bar', prep_time: 5, cook_time: 20, servings: 6, meal: 'snack', 
ingredients: "6 dates, pitted and roughly chopped
½ cup water
¼ cup maple syrup
2 tablespoons chia seeds
¼ teaspoon salt
1 cup oats
1 cup crushed vegan graham crackers, about 10 sheets
½ cup mini vegan marshmallows
1.5 oz dark chocolate, chopped
1 tsp coconut oil or Earth Balance butter",
instructions: "Preheat oven to 350.
Place the dates, water, maple syrup, chia seeds, and salt into the bowl of your food processor. Let it all soak for 5 minutes, then process until fairly smooth (it’s OK to have some pieces of dates remaining, but you don’t want any big chunks).
Toast oats over medium heat in a heavy bottomed skillet until golden brown, about 5 minutes. Stir frequently to ensure even toasting and prevent them from burning.
In a medium mixing bowl, add the oats, graham crackers, marshmallows, dark chocolate and the date mixture. Mix well with a spoon until all the dry ingredients are completely covered in the date mixture.
Line a 8.5' x 4.5' loaf pan with parchment paper, or grease the pan with coconut oil or Earth Balance butter. Spread the mixture evenly into the pan, then press down on it to really compact it (I used the bottom of a glass for this).
Bake for 20 minutes. Cool completely, then remove from the pan and cut into 6 bars.
To make these portable, wrap them in parchment paper, plastic wrap, or small ziplocks, then throw them in your pack and go!",
image: "https://www.freshoffthegrid.com/wp-content/uploads/2016/05/homemade-chewy-smores-granola-bar-recipe-9.jpg",
upvotes: 8)

recipe5 = Recipe.create(title: 'Red Lentil Sloppy Joes', prep_time: 5, cook_time: 25, servings: 2, meal: 'lunch', 
ingredients: "½ tablespoon oil
1 small onion, diced
1 Anaheim pepper, diced
2 tablespoons tomato paste
3 cloves garlic, minced
½ cup red lentils
1 ½ cup water, or broth
1 tablespoon mustard
1 tablespoon maple syrup
2 teaspoons apple cider vinegar
1 teaspoon vegan Worcestershire
1 teaspoon chili powder
½ teaspoon salt
2 buns",
instructions: "In a medium pot, heat the oil over medium heat and add the chopped onions and Anaheim pepper. Saute until soft and the onions just begin to turn golden, 3-4 minutes. Add tomato paste and saute for a minute, then add the garlic and cook 1 minute.
Add the red lentils and 1 ½ cup water to the pot. Bring to a boil, then reduce to a simmer. Cook 10-15 minutes, stirring occasionally, until the lentils are pretty tender but not falling apart.
Add mustard, maple syrup, apple cider vinegar, Worcestershire, chili powder, and salt. Stir to combine. Simmer until the sauce thickens a bit, 3-5 minutes more.
Serve on toasted buns with whatever toppings and sides you love!",
image: "https://freshoffthegrid.com/wp-content/uploads/2017/07/red-lentil-sloppy-joes-vegan-camping-food-5.jpg",
upvotes: 12)

recipe6 = Recipe.create(title: 'Grilled Sweet Potato Fajitas', prep_time: 25, cook_time: 20, servings: 4, meal: 'dinner',
ingredients: "1 large sweet potato
1 tbsp cooking oil
2 teaspoon liquid aminos, or soy sauce
1 tbsp New Mexico chile powder
½ tsp salt
1 red bell pepper
1 poblano pepper, or green bell pepper if you want something milder
1 white onion
3 tbsp cooking oil
3 cloves of garlic
1 tsp New Mexico chile powder
1 tsp ground cumin
1 tsp salt
1 lime, cut into wedges
4-6 flour tortillas, or corn for GF", 
instructions: "PREP & MARINATE THE SWEET POTATO 'STEAKS': Cut both ends off the sweet potato. Place the sweet potato vertically on your cutting board and slice downwards to create 4 or so ½ inch slabs. Prepare the marinade by mixing the oil, liquid aminos, chile powder, and salt together in a small container. Lay the sweet potato on a large plate and drizzle half the marinade over the top, using the back of a spoon if needed to evenly coat. Flip the sweet potato and repeat on the other side. Set aside and let marinate for at least 20 minutes.
PREP VEGGIES: Meanwhile, slice up all the vegetables. De-stem and deseed the peppers and cut into long strips. Chop the onion into ¼” wide slices. Chop the garlic.
COOK THE VEGGIES: Over your campfire, heat 2 tablespoons oil in a cast iron skillet. Once hot, add the peppers and onion. Sauté over high heat until they soften, then add the garlic and spices. Continue to cook until the vegetables are soft and the onion is just beginning to brown - about 15-20 minutes total.
COOK THE SWEET POTATOES: Right after you get the vegetables going in the skillet, place the sweet potatoes on the grill (you could also cook them in a second cast iron if you’re not cooking over a campfire). Cook on one side for 5 minutes, then flip and cook the other side for 5 minutes. Once they are tender throughout (but not mushy!), pull them off the fire and slice into ¼” slices.
TOAST THE TORTILLAS over the fire, about 15-20 seconds per side.
TO ASSEMBLE: place a scoop of the vegetables onto a tortilla. Add the sweet potatoes on top, and finish with a squeeze of lime. Repeat for the other fajitas. Dig in!",
image: "https://www.freshoffthegrid.com/wp-content/uploads/2016/09/Vegan-Grilled-Sweet-Potato-Fajitas.jpg",
upvotes: 15)

recipe7 = Recipe.create(title: '5 Ingredient Vegan Tacos', prep_time: 2, cook_time: 10, servings: 6, meal: 'dinner',
ingredients: "3/4 cup water
1 tablespoon taco seasoning
1/2 tablespoon dried minced onions, or 1 teaspoon onion powder
1 cup TVP, (textured vegetable protein)
1 (15oz) can black beans, drained
salt to taste
6 corn tortillas
Toppings:, avocado, cilantro, salsa, limes, red onion, etc., all optional",
instructions: 'Bring the water, taco seasoning, and onion to a boil. Add the TVP and reduce heat to low. Allow the TVP to absorb the liquid, and then add the drained black beans.
Cover and cook on low heat, stirring often, until the tortillas are ready - be mindful to not let the filling scorch on the bottom of the pot. Check for seasoning - add salt if needed (taco seasonings all have different salt contents so use your judgment on how much to add).
Heat up the tortillas in a pan with some oil, on a grill, or over your stove burner.
Remove the filling from the heat and build your tacos using your favorite toppings.',
image: "https://www.freshoffthegrid.com/wp-content/uploads/2015/12/5-ingredient-vegan-taco-recipe.jpg",
upvotes: 20)

recipe8 = Recipe.create(title: "Vegan S'mores", prep_time: 5, cook_time: 5, servings: 2, meal: 'dessert',
ingredients: '2 vegan marshmallows
2 vegan graham crackers
2 squares dark chocolate',
instructions: "Place the marshmallows on a stick or long metal skewer and roast over your campfire until browned on all sides.
Break a graham cracker in half. Place a square of dark chocolate on one half, and top with one of the roasted marshmallows. Place the other graham cracker half on top. Repeat for the second s'more.",
image: "https://www.freshoffthegrid.com/wp-content/uploads/2016/07/Vegan-Smores-with-Dandies-Vegan-Marshmallows-5.jpg",
upvotes: 300)