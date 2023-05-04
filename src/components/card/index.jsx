import { useEffect, useState } from 'react'
import { mockFetch } from '../../utils/mockFetch'
import './style.css'


export const Card = () => {
    const [products, setEvents] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    useEffect(() => {
    setLoading(true)
    mockFetch('/products.json')
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
    <>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}    
        {products.map((product) => (
        <div key={product.id} className='card'>
            <img src={product.image} alt="event" />
            <h5>{product.name}</h5>
            <div className='card-bottom'>  
                <span> Price: <b>{product.price}</b> $</span>                      
                <button>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6653 5.13122H7.20212V1.66821C7.20212 0.332846 5.13112 0.332846 5.13112 1.66821V5.13122H1.66799C0.33292 5.13122 0.33292 7.20215 1.66799 7.20215H5.13112V10.6652C5.13112 12.0005 7.20212 12.0005 7.20212 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#464343"/>
                    </svg>
                </button>  
            </div>            
        </div>
    ))}
    </>
  )
}
