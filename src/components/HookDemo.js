import React, { useSelector, useEffect, useReducer, useState } from "react";
 const reducer = (state,acction) =>{
     console.log(acction);
    switch (acction.type){
        case 'create' : return acction.payload; 
        case 'failed' : return acction.payload ; 
        case 'loadding' : return  acction.payload; 
        default : return state;
    }
 }

 const HookDemo = () => {
    const [state, dispath] = useReducer(reducer,'');

    const a = useSelector(state => state.list)
    let [name, setName] = useState('');
    useEffect(() => {
        dispath({
            type : 'create',
            payload : name
         }) 
    },[name])

    return (<div>
        <p>{state}</p>
        <label>
            Enter your name
        </label>
        <input onChange ={(e) => setName(e.target.value)}  value = {name}></input>
    </div>)
 }


 export default HookDemo;