import React, {Component} from 'react';
import NewBidForm from './NewBidForm';
import { Bid } from '../requests';

class NewBidPage extends Component {
    constructor(props) {
      super(props);
      this.state = { errors: [] };
      this.createBid = this.createBid.bind(this);
    }
     id = this.props.auctionId
    createBid(id,params) {
      // console.log(`Params: ${params.price} `)
      Bid.create(id,params)
      // console.log(params)
      // console.log(id)
        .then((id) => {
          console.log(id)
          console.log( this.props.history)
          
            this.props.history.push(`/auctions/${this.props.auctionId}`);
          
        })
    }
  
    render(){
      return(
        <div>
          <NewBidForm createBid={this.createBid} id={this.props.auctionId}/>
        </div>
      )
    }
  
  }
  
  export default NewBidPage;
