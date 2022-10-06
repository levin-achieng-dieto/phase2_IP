import React from "react";
import { Link } from "react-router-dom"

function Destinations(){
    return (
        <>
            <div className=" pl-20 bg-black text-white h-32 mt-1">
            <div className="flex justify-between w-2/4 pt-11 text-2xl font-bold">
                <Link to="/soloTravel" ><h2 className="pl-8">Solo Destinations</h2></Link>
                <Link to="/FamilyTravel"><h2>Family Destinations</h2></Link>
                <Link to="/GroupTravel"><h2>Group Destinations</h2></Link>
                <Link to="/HotList"><h2>HOTLIST</h2></Link>
            </div>
        </div>
        </>
    )
}
export default Destinations;