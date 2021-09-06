import React, { useReducer, useState } from "react";
 const reducer = (state,acction) =>{
     console.log(acction);
    switch (acction.type){
        case 'create' : return acction.payload; 
        case 'failed' : return acction.payload ; 
        case 'loadding' : return  acction.payload; 
        default : return state;
    }
 }

 const DemoUseReducer = () => {
    const submit = () => {
        dispath({
           type : 'create',
           payload : name
        })
    }

    const [state, dispath] = useReducer(reducer,'');
    let [name, setName] = useState('');
    return (<div>
        <p>{state}</p>
        <label>
            Enter your name
        </label>
        <input onChange ={(e) => setName(e.target.value)}  value = {name}></input>
        <button type='button' onClick = {submit}>success</button>
    </div>)
 }


 export default DemoUseReducer;