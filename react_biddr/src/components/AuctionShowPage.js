import React, { Component } from "react";
import BidList from "./BidList";
import AuctionDetails from './AuctionDetails';
import NewBidPage from "./NewBidPage";
// import NewBidForm from "./NewBidForm";

import {Auction} from '../requests';

class AuctionShowPage extends Component {
    
    constructor(props) {
    
        super(props);
        
        this.state = { Auction: {} }

    }

    componentDidMount(){
       Auction.show(this.props.match.params.id) 
       .then((fetchedAPIauction) => {
           this.setState((state) => {
               return {
                   Auction: fetchedAPIauction
               }
           })
       }) 
    }

    render() {
        const { title, description, ends_at, reserveprice } = this.state.Auction;
        console.log(this.state.Auction)
        return (
            <div>
                <AuctionDetails
                    title={title}
                    description={description}
                    ends_at={new Date(ends_at)}
                    reserveprice={reserveprice}
                    
                />
                <NewBidPage auctionId={this.state.Auction.id} {...this.props}/>
               

                <BidList list={this.state.Auction.bids} />
            </div>
        )
    }
}


export default AuctionShowPage;
