import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

const Home = () => {
    const userProfile = useSelector(state => state.userState)
    
    return (
        <div>
            <h1>Welcome {userProfile.user.result ? userProfile.user.result.full_name : "Guest"}!</h1>
        </div>
    )
}

export default Home
