import { useEffect, useState } from 'react'
import { mockFetch } from '../../utils/mockFetch'
import './style.css'

export const Category = () => {
    const [products, setProducts] = useState([])
  
    useEffect(() => {
      mockFetch('/products.json')
        .then(res => res.json())
        .then(data => {
          setProducts(data)
        })
    }, [])
  
    const categories = [...new Set(products.map(product => product.category))]
  
    return (
      <div className='category-block'> 
        {categories.map((category) => (
          <div className='category-box'>
                <button>{category}</button>        
          </div>
        ))}
      </div>
    )
  }
  
