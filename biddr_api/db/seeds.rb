# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bid.destroy_all
Auction.destroy_all
User.destroy_all


PASSWORD = '123'

5.times do 
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
        first_name:first_name,
        last_name: last_name,
        email: "#{first_name}@#{last_name}.com",
        password: PASSWORD
    )
end

users = User.all



20.times do
    created_at = Faker::Date.backward(days:365 * 5)

    a = Auction.create(
       title: Faker::Commerce.product_name,
       description: Faker::Hacker.say_something_smart,
       ends_at: Faker::Date.forward(days: 23),
       reserveprice:Faker::Commerce.price ,
       created_at: created_at,
       updated_at: created_at,
       user: users.sample
    )
    if a.valid? #youi can also use q.persisted?
        rand(1..5).times do
            Bid.create(price:Faker::Commerce.price, bid_date:Faker::Date.backward(days: 14), auction:a, user: users.sample)
        end
       
    end
end

auctions = Auction.all
bids = Bid.all

puts Cowsay.say("Generated #{auctions.count} auctions", :frogs)
puts Cowsay.say("Generated #{bids.count} bids", :cow)

