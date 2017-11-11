class Person < ApplicationRecord
    validates :nickname, presence: true,
    has_many :items,
end
