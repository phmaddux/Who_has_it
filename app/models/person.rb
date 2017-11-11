class Person < ApplicationRecord
    validates :nickname, presence: true,
    has_many :items,
end

# dependent: :destroy
# do the items need to be dependant on the people as well?