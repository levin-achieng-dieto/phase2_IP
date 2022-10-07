import React, { useEffect } from "react";
import Logo from "./Logo"
import { useNavigate } from "react-router-dom"

function Form(){
    const navigate = useNavigate();

    const [fetched, setFetched] = React.useState([])
    

    function fetchingData(){
        fetch("https://phase2-ip.herokuapp.com/users")
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
    //const [error, setError] = React.useState(false)


    function captureInputs(inputs){
        setFormInputs({...formInputs, [inputs.target.name]:inputs.target.value})
    }


    function handleSubmit(e){
        e.preventDefault();
        fetch("https://phase2-ip.herokuapp.com/users", {
            method:"POST",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(formInputs)
        })
        .then(response => response.json())
        .then((resp) => {
            const useriputs = [...fetched, resp]
            setFetched(useriputs)
            navigate('/SoloTravel')
        })
        
        // if(formInputs.name.length || formInputs.email.length || formInputs.password.length === 0){
        //     setError(true)
        //}
    }

    return (
        <form >
            <Logo />
            <h1 className="text-3xl text-center pt-20 pb-28">Sign in to view our Destinations</h1>
            <div className="text-2xl ml-96 pl-96 m-auto form-inner">
                <div className="form-group">
                    <label className="p-5">Name</label> <br />
                    <input type="text" name="name" placeholder="name" className="h-16 border-2 mb-12 rounded-xl" onChange={captureInputs} /><br />
                </div>
                {/* {error ?
                <label>Enter Username</label> : ""} */}
                <div className="form-group">
                    <label className="p-5">email </label> <br />
                    <input type="email" name="email" placeholder="email" className="h-16 border-2 mb-12 rounded-xl" onChange={captureInputs} /><br />
                </div>
                {/* {error ?
                <label>Enter Email</label> : ""} */}
                <div className="form-group">
                    <label className="p-5">Password</label><br/>
                    <input type="password" name="password" placeholder="password" className="h-16 border-2 mb-12 rounded-xl" onChange={captureInputs} /><br />
                </div>
                {/* {error ?
                <label>password is required</label> : ""} */}
                <div>
                    <input type="submit" className="m-12 border-2 h-16 w-44 text-white bg-black bg-orange-500 h-16 w-40 rounded-2xl"  onClick={handleSubmit}></input>
                </div>
                {/* <button className="m-44 border-2 h-16 w-36 text-white bg-black" onClick={handleSubmit}>submit</button> */}
                {/* <Link to="/SoloTravel" replace><button type="submit" className="m-12 border-2 h-16 w-44 text-white bg-black" >Submit</button> </Link> */}
            </div>
        </form>
    )
}
export default Form;