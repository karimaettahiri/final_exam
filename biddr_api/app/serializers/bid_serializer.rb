class BidSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :price,
    
    :bid_date
    
    
  )
  belongs_to :user
  class UserSerializer < ActiveModel::Serializer
    attributes(
      :id,:first_name,:last_name,:email,:full_name
    )
  end
  belongs_to :auction
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
  end

end
