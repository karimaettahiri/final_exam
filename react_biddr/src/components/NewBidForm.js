import React from 'react'

export default function NewBidForm(props) {
     const{id}=props
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const params = {
            price: formData.get("price"),
           
          
        }
        console.log(params);
        props.createBid(id,params);
    }
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="price"></label>
            
            <input type="number" name="price" id="price" />
            <input type="submit" value="Bid" />
        </div>
        
               
            
        </form>
    )
}
