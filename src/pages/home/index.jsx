

import './style.css'
import { useEffect, useState } from 'react'
import { Card } from '../../components/card'
import { Category } from '../../components/categories'
import SliderBox from '../../components/slider/slider.jsx'

export const HomePage = () => {

    const [products, setEvents] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading(true)
        fetch('http://16.16.167.57/api/v1/items/product/')
          .then(res => res.json())
          .then(data => {
            setEvents(data)
          })
          .catch((err) => {
            setError(err.message)
        })
        .finally(() => {
          setLoading(false)
        })  
    }, [])

    return (
        <main>
            <section className='slider'>
                <SliderBox/>
            </section>
            <section>
                <div className="container">
                    <div className="content">
                        <div className="categories">
                            <Category />
                        </div>
                        <div className="card-content">
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                            {products.map((product) => (
                                <Card
                                    key={product.id}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    onClickPlus={(products) => console.log(product)}
                                />
                            ))}                            
                        </div>
                    </div>                   
                </div>
            </section>
        </main>
    )
}