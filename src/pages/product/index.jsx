import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TwitIcon } from './twit-svg'
import { InstIcon } from './inst-svg'
import { FaceIcon } from './faceb-svg'

import './style.css'

export const ProductPage = () => {
    const { id } = useParams()
    const [products, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading(true)
        fetch(`http://16.16.167.57/api/v1/items/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    if (!products) {
        return null
    }

    return (
        <>
            <div className="container">
                <div className="product-block">
                    <div className="image-block">
                        <img src={products.image} alt="" />
                    </div>
                    <div className="content-block">
                        <h5>{products.name}</h5>
                        <h4>Цена: {products.price} $</h4>
                        <button>Добавить в корзину</button>
                        <div className="icon-block">
                            <div className="icons">
                                <a href="https://twitter.com/?lang=ru" target="_blank">
                                    <TwitIcon />
                                </a>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <FaceIcon />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <InstIcon />
                                </a>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="product-bottom">{products.description}</div>
            </div>
        </>
    )
}
