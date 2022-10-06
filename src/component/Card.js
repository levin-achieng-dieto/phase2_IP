import React from "react";

const inline = {
    height: "700px"
}



function Card({image, location, Description, auther}){
    return (
        <>
            <div className="text-2xl text-center ml-96 mr-96 content-center">
                <div className="">
                    <img className="w-full" src={image} alt="text" style={inline}/>
                </div>
                <div>
                    <h2 className="mb-10 font-bold">{location}</h2>
                    <p className="ml-44 mr-44 text-3xl">{Description}</p>
                    <h1 className="mt-8 mb-24">{auther}</h1>
                </div>
            </div>
        </>
    )
}
export default Card