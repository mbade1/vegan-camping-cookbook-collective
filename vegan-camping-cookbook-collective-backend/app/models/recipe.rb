class Recipe < ApplicationRecord
    has_many :recipes
    has_many :user, through: :recipes
end
