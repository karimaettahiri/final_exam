import React, { Component } from 'react';
import { Auction } from '../requests';
import { Link } from 'react-router-dom'

class AuctionIndexPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            auctions: []
        }
        
    }

    componentDidMount(){
        Auction.index()
        .then((auctionsData) => {
            this.setState((state)=> {
                return {
                    auctions: auctionsData
                }
            })
        })
    }

  
    render() {
        return (
            <div>
                <h1 style={{ padding: "10px 20px", textAlign: "center", color: "Pink"}}>Auctions</h1>
                {this.state.auctions.map((e) => {
                    return (
                        <div key={e.id}>
                        <h1 ><Link style={{ padding: "10px 20px", textAlign: "left",color: "Pink"}}  to={`/auctions/${e.id}`}>{e.title}</Link>  </h1>
                        <small style={{ padding: "10px 20px", textAlign: "left",color: "Blue"}}  > posted on {e.created_at}</small>
                        </div>
                    )
                })}
               
               
            </div>
        )
    }
}

export default AuctionIndexPage;