
import { forwardRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import './style.css'

export const AdminPage = forwardRef(() => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        fetch('http://16.171.59.219/token/', {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.username) setUser(data)
            })
    }, [])
    return (
        <div>
            {
                user
                    ? (
                        <div className="user">
                            <div>{user.username}</div>
                            <img src={user.image} alt="" />
                            <button> login</button>
                        </div>
                    )
                    : (
                        <Link to="/login"> Go to login </Link>
                    )
            }
        </div>
    )
})


    
