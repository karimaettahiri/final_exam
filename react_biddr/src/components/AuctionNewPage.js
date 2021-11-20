import React, {Component} from 'react';
import NewAuctionForm from './NewAuctionForm';
import {Auction } from '../requests';

class AuctionNewPage extends Component {
    constructor(props) {
      super(props);
      this.state = { errors: [] };
      this.createAuction = this.createAuction.bind(this);
    }
    
    createAuction(params) {
      console.log(`Params: ${params.title} ${params.description} ${params.ends_at} ${params.reserveprice}`)
      Auction.create(params)
        .then((auction) => {  
            this.props.history.push(`/auctions/${auction.id}`);
          
        })
    }
  
    render(){
      return(
        <div>
            <h1>Create an auction </h1>
          <NewAuctionForm createAuction={this.createAuction}/>
        </div>
      )
    }
  
  }
  
  export default AuctionNewPage;

