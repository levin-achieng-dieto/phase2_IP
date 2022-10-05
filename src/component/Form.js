import React, { useEffect } from "react";
import Logo from "./Logo"
import { Link } from "react-router-dom"


function Form(){
    const [fetched, setFetched] = React.useState([])
    function fetchingData(){
        fetch("http://localhost:3000/users")
        .then((response) => response.json())
        .then((resp) => setFetched(resp))
    }

    useEffect(()=> {
        fetchingData()
    }, [])

    const [formInputs, setFormInputs] = React.useState({
        email: "",
        name: "",
        password: ""
    })


    function captureInputs(inputs){
        setFormInputs({...formInputs, [inputs.target.name]:inputs.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/users", {
            method:"POST",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(formInputs)
        })
        .then(response => response.json())
        .then((resp) => {
            const useriputs = [...fetched, resp]
            console.log(useriputs);
            setFetched(useriputs)
            
        })
    }

    return (
        <form onChange={captureInputs} >
            <Logo />
            <h1 className="text-3xl text-center pt-20 pb-28">Sign in to view our Destinations</h1>
            <div className="text-2xl ml-96 pl-96 m-auto">
                <label className="p-5">email: </label> 
                <input type="text" name="email" className="h-12 border-2 mb-12" /><br />
                <label className="p-5">Name:</label>
                <input type="text" name="name" className="h-12 border-2 mb-12" /><br />
                <label className="p-5">Password:</label>
                <input type="text" name="password" className="h-12 border-2 mb-12" /><br />
                <button className="m-44 border-2 h-16 w-36 text-white bg-black" onClick={handleSubmit}>submit</button>
                <Link to="/SoloTravel" replace><button className="m-12 border-2 h-16 w-44 text-white bg-black">Destinations</button> </Link>
            </div>
        </form>
    )
}
export default Form;