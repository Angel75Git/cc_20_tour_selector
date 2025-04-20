import React, { useState } from 'react';


//Create a function to render tour cards 
//Given id, name, info, image, price, and onRemove function as props

function TourCard({ id, name, info, image, price, onRemove }) {
    const [readMore, setReadMore] = useState(false); // State to manage read more functionality

    const toggleReadMore = () => {
        setReadMore(!readMore); // Toggle the read more state
    }

    //remove tour card function
    const removeCard = () => {
        onRemove(id); // Call the onRemove function with the tour id
    }
    return (
        //Tour card component
        <article className="single-tour">
        
        <div>
            <h2>{name}</h2>
            <h4>Refrence number: {id}</h4>
            <img src={image} width="500"/>
            <h4>Price: ${price}</h4>
        </div>
        <p>
            {/*Show the descripton of the tour if Readmore is true, otherwise slice the full description to 80 characters*/}
            {readMore ? info : `${info.slice(0, 80)}...`}
            <div className = 'readMore' onClick={toggleReadMore} > {readMore ? 'Read Less' : 'Read more'} </div>
        </p>

        <div>
           { /*Button to remove a tour card*/}
            <button className="Remove-btn" onClick={removeCard}>
            Not Interested </button>
        </div>
        </article>
      
    );
}

export default TourCard;
//This component is used to render the tour cards in the App.jsx file
