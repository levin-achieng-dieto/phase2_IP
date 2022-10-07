import React from "react";
import Logo from "./Logo"
import Destinations from "./Destinations"
import Card from "./Card";


function SoloTravel(){

    const[soloDestinations, setSoloDestinations] = React.useState([])

    function solo(){
        fetch("https://phase2-ip.herokuapp.com/soloTravel")
        .then((response) => response.json())
        .then((resp) => setSoloDestinations(resp))
    }
    React.useEffect(() => {
        return solo() 
    }, [])

    const result = soloDestinations.map((soloDestination) => <Card key={soloDestination.id} 
    image={soloDestination.image} location={soloDestination.location}
    Description={soloDestination.Description} auther={soloDestination.auther}/>)


    return (
        <div>
            <Logo />
            <Destinations />
            <h1 className="text-center p-20 text-3xl font-bold">Solo Travelling Destinations You Dont Want to Miss</h1>
            {result}
        </div>
    )
}
export default SoloTravel