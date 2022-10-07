import React from "react";
import Logo from "./Logo";
import Destinations from "./Destinations";
import Card from "./Card"


function GroupTravel(){

    const [groups, setGroups] = React.useState([])

    function groupDes(){
        fetch("https://phase2-ip.herokuapp.com/groupTravel")
        .then((response) => response.json())
        .then((resp) => setGroups(resp))
    }

    React.useEffect(() => {
        groupDes()
    }, [])

    const groupDestination = groups.map((group) => {
        return <Card key={group.id} image={group.image}
        location={group.location} Description={group.Description}
        auther={group.auther}/>
    })

    return (
        <div>
            <Logo />
            <Destinations />
            <h1 className="text-center p-20 text-3xl font-bold"> Life is Fun with Friends Around</h1>
            {groupDestination}
        </div>
    )
}
export default GroupTravel