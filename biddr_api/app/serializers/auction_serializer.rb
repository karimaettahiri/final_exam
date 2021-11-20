class AuctionSerializer < ActiveModel::Serializer
 
  attributes(
    :id,
    :title,
    :description,
    :created_at,
    :updated_at,
    :ends_at,
    :reserveprice
    
  )


  belongs_to :user
  class UserSerializer < ActiveModel::Serializer
    attributes(
      :id,:first_name,:last_name,:email,:full_name
    )
  end
  has_many :bids
  class BidSerializer < ActiveModel::Serializer
    attributes(
      :id,:price,:created_at,:updated_at,:bid_date, :biddr_full_name
    )
    def biddr_full_name
      object.user&.full_name
    end

  end
end
