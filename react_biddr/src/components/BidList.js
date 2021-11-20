import React from "react";
import BidDetails from './BidDetails';

export default function BidList(props) {
    const bids = props.list
    return (
        <div>
            <h4>Previous Bids:</h4>
            <ul>
                {
                    bids?
                    bids.map((e, i) => {
                        return <BidDetails
                            key={i}
                            price={e.price}
                            bid_date={e.bid_date}
    
                            id={e.id}
                            
                        />
                    })
                    :
                    null
                }
            </ul>
        </div>
    )
}
