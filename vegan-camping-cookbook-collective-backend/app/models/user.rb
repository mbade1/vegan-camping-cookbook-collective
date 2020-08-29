class User < ApplicationRecord
  has_secure_password 
  has_many :cookbooks
  has_many :recipes, through: :cookbooks

  validates :name, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, presence: true
end
