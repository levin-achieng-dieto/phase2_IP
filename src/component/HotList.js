import React from "react";
import Logo from "./Logo";
import Destinations from "./Destinations";
import Card from "./Card"

function HotList(){

    const[hotList, setHotList] = React.useState([])

    function fetchData(){
        fetch("https://dashboard.heroku.com/apps/phase2-ip/hotList")
        .then((response) => response.json())
        .then((data) => setHotList(data))
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    const renderHotList = hotList.map((list) => {
        return <Card key={list.id} image={list.image}
        location={list.location} Description={list.Description}
        auther={list.auther} />
    })

return (
    <>
        <Logo />
        <Destinations />
        <h1 className="text-center p-20 text-3xl font-bold">Explore Hot Dishes!</h1>
        {renderHotList}
    </>
)
}
export default HotList;