class Item < ApplicationRecord
  validates :name, presence: true
  belongs_to :user
  belongs_to :person
end
