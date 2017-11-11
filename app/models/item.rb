class Item < ApplicationRecord
  validates :name, presence: true,
  belongs_to :User
  belongs_to :Person
end
