import React from "react";


function Form(){
    return (
        <form className="">
            <h1 className="text-3xl text-center pt-20 pb-28">Sign in to view our Destinations</h1>
            <div className="text-2xl ml-96">
                <label className="p-5">email: </label> 
                <input type="text" className="h-12 border-2 mb-12"/><br />
                <label className="p-5">Name:</label>
                <input type="text" className="h-12 border-2 mb-12"/><br />
                <label className="p-5">Password:</label>
                <input type="text" className="h-12 border-2 mb-12"/><br />
                <button type="submit" className="m-44 border-2 h-16 w-36 text-white bg-black">Submit</button>
            </div>
        </form>
    )
}
export default Form;