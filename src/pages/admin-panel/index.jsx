import { useEffect, useState } from "react"
import {NavLink, useNavigate } from "react-router-dom"
import { CreateItem } from "./product-items"

import './style.css'

export const AdminPage = (() => {
    const history = useNavigate()
    const [user, setUser] = useState(null)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://16.171.59.219/token/', {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.username) {
                    setUser(data)

                    fetch('http://16.171.59.219/api/v1/items/product/')
                        .then(response => response.json())
                        .then(productsData => {
                            setProducts(productsData)
                        })
                        .catch(error => {
                            console.log('Ошибка при получении списка продуктов:', error)
                        })
                } else {
                    history('/not-found')
                }
            })
    }, [])

    return (
        <div className="admin-block">
            {user ? (
                <>
                    <div className="user">
                        <h1>{user.username}</h1>
                        <NavLink to={'/create'} className="add-btn">
                            Добавить товар
                        </NavLink>                        
                    </div>
                    <div>
                        {products.map(product => (
                            <CreateItem
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        ))}
                    </div>
                </>
            ) : null}
        </div>
    )
})