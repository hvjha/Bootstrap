import React from 'react'
import User from './User'

function Reuse() {
    const users = [
        {name:"Golu",email:'golu@gmail.com',contact:987654321},
        {name:"Ashutosh",email:'ashu@gmail.com',contact:987654321},
        {name:"Jayant",email:'arya@gmail.com',contact:987654321},
        {name:"Abhay",email:'aby@gmail.com',contact:987654321},
    ]
  return (
    <div>
      <h1>Reuseable Component</h1>
      {
        users.map((i)=>
            <User data={i}/>
        
        )
      }
    </div>
  )
}

export default Reuse
