import React from "react"

function AuctionDetails(props) {
    console.log(props)
    const{description,title,ends_at,reserveprice}=props
    
    return (
        <>
            <h2 style={{ backgroundColor: "lightblue" }} className="">{title}</h2>
            <p>
                {description}
                <br />
                {/* Owner { props.full_name ? props.full_name : null} */}
            </p>
            <p style={{textAlign: "center" }}>
                ends at {ends_at.toLocaleString()} 
                <br/>
                reserve price $ {reserveprice}
                
            </p>
        </>
    )
}
export default AuctionDetails;