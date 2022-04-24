import React, { useState } from 'react'

const LoggedIn = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogIn = () => {
        setLoggedIn(true)
    }

    const handleLogOut = () => {
        setLoggedIn(false)
    }
  return (
    <div>
        <button onClick={handleLogIn}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <p>User is {loggedIn ? 'Logged In' : 'Logged Out'}</p>
    </div>
  )
}

export default LoggedIn