class User < ApplicationRecord
    validates :username, presence: true
    validates :email, presence: true
    validates :password, presence: true
    has_many :items, dependent: :destroy
    has_many :people, through: :items
end
