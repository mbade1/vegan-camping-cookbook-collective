class User < ApplicationRecord
    has_many :cookbooks
    has_many :cookbook_recipes
    has_many :recipes, through: :cookbook_recipes
end
