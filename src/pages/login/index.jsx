

import { useState } from "react"
import { useNavigate } from "react-router-dom"


import './style.css'

export const LoginPage = () => {
    const history = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    const handleLogin = (e) => {
        e.preventDefault()
        fetch('http://16.171.59.219/token/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json',
            }
        })            
            .then(res => res.json())
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', 'token ' + data.token)
                    history('/admin')
                }           
        })
    }
    
    return (
        <div className="login-block" >
            <form className="login-box">
                <div className="input-box">
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
                </div>
                
                <button onClick={handleLogin}>
                    Войти
                </button>
            </form>
        </div>
    )
}