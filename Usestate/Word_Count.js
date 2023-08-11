import React, { useState } from 'react'

const Word_Count = () => {

    const[use,SetUse]=useState(0)

    function usage_purpose(event) {
        SetUse(event.target.value.length);
    }
  return (
    <div>
        <p>{use}</p>
      <input type="text" class="texbox-inside" onChange={usage_purpose} placeholder="Enter the input"/>
    </div>
  )
}

export default Word_Count
