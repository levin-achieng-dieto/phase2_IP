import React from "react"
import NavBar from "./NavBar"

function Home(){
    return (
        <>
            <NavBar />
            <div className="h-4/6">
                <img src="https://i.postimg.cc/Pq2bqQs1/matt-drenth-Bkw-a-S2-Nvg8-unsplash.jpg" alt="HomePage" className="" />
                <h2>location</h2>
                <p>some Long text</p>
                <h1>Auther</h1>
            </div>
        </>
    )
}
export default Home;