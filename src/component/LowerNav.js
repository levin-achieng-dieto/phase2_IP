import React from "react";
//import { Link } from "react-router-dom"


function LowerNav(){
    return (
        <div className=" pl-20 bg-black text-white h-32 mt-1" >
            <div className="flex justify-between w-2/4 pt-11 text-2xl font-bold">
                <h2 className="pl-8">Solo Destinations</h2>
                <h2>Family Destinations</h2>
                <h2>Group Destinations</h2>
                <h2>HOTLIST</h2>
            </div>
        </div>
    )
}
export default LowerNav;