import React, {useState } from 'react'

const Count = () => {
    const[don,setDon]=useState(0);

    function handle(){
        setDon(don+1)
    }

    function handling(){
        setDon(don-1)
    }

  return (

    <div>
        <h3 class="don">{don}</h3>
      <button class="handle" onClick={handle}>INCREMENT</button>
      <button  class="handling" onClick={handling}>DECREMENT</button>
    </div>
  )
}

export default Count
