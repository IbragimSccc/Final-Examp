

import './style.css'
import { useContext, useEffect, useState } from 'react'
import { Card } from '../../components/card'
import { Category } from '../../components/categories'
import {AppContext} from '../../App'
import SliderBox from '../../components/slider/slider.jsx'


export const HomePage = () => {
    const {products: theProduct, setProducts} = useContext(AppContext)
    const [products, setEvents] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading(true)
        fetch('http://16.171.59.219/api/v1/items/product/')
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
        window.scrollTo(0, 0)
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
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    onClickPlus={() => setProducts([...theProduct,product])}
                                />
                            ))}                            
                        </div>
                    </div>                   
                </div>
            </section>
        </main>
    )
}