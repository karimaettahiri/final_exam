import React from "react";

const BidDetails = (props) => {
    const { price,bid_date, id } = props;
    return (
        <div>
            <p>
               $ {price} <br />
               on {bid_date}
            </p>
           
        </div>
    )
}

export default BidDetails;