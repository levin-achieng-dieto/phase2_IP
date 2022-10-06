import React from "react";
import Logo from "./Logo";
import Destinations from "./Destinations";
import Card from "./Card"


function FamilyTravel(){

    const [family, setfamily] = React.useState([])

    function familyDestination(){
        fetch("http://localhost:3000/familyTravel")
        .then((response) => response.json())
        .then((resp) => setfamily(resp))
    }

    React.useEffect(() => {
        familyDestination()
    }, [])

    const familyDes = family.map((destination) => {
        return <Card key={destination.id} image={destination.image}
        location={destination.location} Description={destination.Description}
        auther={destination.auther} />
    })

    return (
        <div>
            <Logo />
            <Destinations />
            <h1 className="text-center p-20 text-3xl font-bold"> wondering where to spend the Holiday with your Family?? We gatchu</h1>
            {familyDes}
        </div>
    )
}
export default FamilyTravel