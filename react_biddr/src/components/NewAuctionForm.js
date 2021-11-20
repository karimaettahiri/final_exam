import React from 'react'

export default function NewAuctionForm(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const params = {
            title: formData.get("title"),
            description: formData.get("description"),
            ends_at: formData.get("ends_at"),
            reserveprice: formData.get("reserveprice")

        }
        console.log(params);
        props.createAuction(params);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" id="title" />
            </div>
            <div>
                <label htmlFor="description">description*</label>
                <br />
                <input type="text" name="description" id="description" />
            </div>
            <div>
                <label htmlFor="ends_at">ends_at*</label>
                <br />
                <input type="text" name="ends_at" id="ends_at" />
            </div>
            <div>
                <label htmlFor="reserveprice">reserve price</label>
                <br />
                <input type="number" name="reserveprice" id="reserveprice" />
            </div>
            <div>
                <input type="submit" value="Save" />
            </div>
        </form>
    )
}
