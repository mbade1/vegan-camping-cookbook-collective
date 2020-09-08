class Recipe < ApplicationRecord
  has_many :cookbooks
  has_many :users, through: :cookbooks
end
