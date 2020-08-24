class Recipe < ApplicationRecord
    has_many :cookbook_recipes
    has_many :cookbooks
end
