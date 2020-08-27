class User < ApplicationRecord
    has_secure_password 
    has_many :cookbooks
    has_many :recipes, through: :cookbooks
end
