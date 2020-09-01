class Recipe < ApplicationRecord
  has_many :cookbooks
  has_many :users, through: :cookbook
end
