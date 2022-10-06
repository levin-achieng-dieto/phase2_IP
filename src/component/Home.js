import React from "react"
import NavBar from "./NavBar"

const inline = {
    height: "900px"
}

function Home(){
    return (
        <>
            <NavBar />
            <div className="text-center">
                <div className="w-full">
                    <img style={inline} src="https://i.postimg.cc/d1q9JQWN/The-Chandi-Boutique-Resort-Spa-Mataram-Hotels-Combined.jpg" alt="HomePage" className="w-full h-96" />
                </div>
                <h2 className="pt-10 pb-5 text-3xl  font-bold">HOLLIDAYCOTTAGES</h2>
                <p className="text-2xl font-light">Whether you're looking for an Airbnb alternative <br />in the UK that's by the sea, nestled in the country or <br />set bang in the middle of a city, <br />you'll want to keep scrolling for our selection of self-catering providers.</p>
                <h1 className="pt-5 mb-20">@ROSHINA JOWAHEER</h1>
                <footer className="h-48 bg-black"/>
            </div>
        </>
    )
}
export default Home;