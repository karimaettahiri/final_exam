class Auction < ApplicationRecord
   
    has_many :bids, dependent: :destroy
    validates :title, presence: {message: "must be provided"}
    validates :description , presence:true  
    belongs_to :user
end
