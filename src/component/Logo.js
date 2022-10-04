import React from "react";
import { Link } from "react-router-dom"


function Logo(){
    return (
        <div className="flex justify-between text-white bg-black h-32 font-bold text-2xl pl-20">
            <h1 className="pt-12 pl-8">The Royal Ways</h1>
            <div className="flex">
            <h2 className="pr-10 pt-12">DESTINATIONS</h2>
            <Link to="/Form" className="pr-20 pt-12">SIGN IN</Link>
            </div>
        </div>
    )
}
export default Logo;