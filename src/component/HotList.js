import React from "react";
import Logo from "./Logo";
import Destinations from "./Destinations";
import Card from "./Card"

function HotList(){

    const[hotList, setHotList] = React.useState([])

    function fetchData(){
        fetch("http://localhost:3000/hotList")
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
        {/* <SoloTravel result={result}/> */}
        {/* {result} */}
        HOTLIST
        {renderHotList}
    </>
)
}
export default HotList;