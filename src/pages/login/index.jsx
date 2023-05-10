

import { useState } from "react"


import './style.css'

export const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    const handleLogin = (e) => {
        e.preventDefault()
        fetch('http://16.16.167.57/token/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })            
            .then(res => res.json())
            .then((data) => {
            localStorage.setItem('token', data.token)
        })
    }
    
    return (
        <div className="login-block" >
            <form className="login-box">
                <input
                    type="text"
                    name="username"
                    placeholder="Логин"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                 <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>
                    Войти
                </button>
            </form>
        </div>
    )
}