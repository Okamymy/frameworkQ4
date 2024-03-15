import { React, useState } from "react";

function Formulari(){
    const [firstName, selfirstName] = useState('');
    const [lastName, selfLastName] = useState('');

    const fullname = firstName + ' ' + lastName

    function handleFirstNameChange(e){
        selfirstName(e.target.value);
    }

    function handleLastNameChange(e){
        selfLastName(e.target.value);
    }

    return(
        <>
            <form action="" class="form">
                <label class="form-control" htmlFor="firstName">First Name: </label>
                <input class="form-control" type="text" value={firstName} onChange={handleFirstNameChange}/>

                <label class="form-control" htmlFor="lastName">Last Name: </label>
                <input class="form-control" type="text" value={lastName} onChange={handleLastNameChange}/>
                <button class="btn btn-outline-success form-control">SignUp</button>
            </form>
            
            <p>Te damos la bienvenida: {fullname}! </p>
        </>
    );
}

export default Formulari;