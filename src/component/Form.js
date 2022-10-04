import React from "react";


function Form(){
    return (
        <form>
            <label>email</label>
            <input type="text" placeholders="email" className="h-12"/>
            <label>Name</label>
            <input type="text" placeholders="email" className="h-12"/>
            <label>Password</label>
            <input type="text" placeholders="email" className="h-12"/>
            <button>Submit</button>
        </form>
    )
}
export default Form;