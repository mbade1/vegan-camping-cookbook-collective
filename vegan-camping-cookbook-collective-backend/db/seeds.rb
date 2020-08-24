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