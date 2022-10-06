import React from "react";


function Card({image, location, Description, auther}){
    return (
        <>
            <div>
                <img src={image} alt="text"/>
                <h2>{location}</h2>
                <p>{Description}</p>
                <h1>{auther}</h1>
            </div>
        </>
    )
}
export default Card