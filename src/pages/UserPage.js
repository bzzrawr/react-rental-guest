import React from 'react'
import {useParams}  from 'react-router-dom'


export default function UserPage() {
  let {id} = useParams()
    return (
      <div>
        <h1> Hey there user {id}</h1>
        <p>Home user profile page</p>
      </div>
    )
}

