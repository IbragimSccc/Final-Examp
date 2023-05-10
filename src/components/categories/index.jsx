import { useEffect, useState } from 'react'
import { mockFetch } from '../../utils/mockFetch'
import './style.css'

export const Category = () => {
    const [products, setProducts] = useState([])
  
    useEffect(() => {
      fetch('http://16.171.59.219/api/v1/items/category/')
        .then(res => res.json())
        .then(data => {
          setProducts(data)
        })
    }, [])
  
    const categories = [...new Set(products.map(product => product.name))]
  
    return (
      <div className='category-block'> 
        {categories.map((name) => (
          <div className='category-box'>
                <button>{name}</button>        
          </div>
        ))}
      </div>
    )
  }
  
