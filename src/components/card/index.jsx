import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PlusIcon } from './plus-icon'
import { CheckMark } from './check-mark-icon'
import './style.css'


export const Card = (product) => {
  const [isAdded, setIsAdded] = useState(false)

  const handleClick = () => {
    setIsAdded(!isAdded)
    product.onClickPlus()
  }

  return (    
    <>       
        <div key={product.id} className='card'>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt="event" />
            </Link>            
            <h5>{product.name}</h5>
            <div className='card-bottom'>  
                <span> Price: <b>{product.price}</b> $</span>                      
                <button className={isAdded ? 'added' : ''} onClick={handleClick}>
                  {isAdded ? <CheckMark /> : <PlusIcon />}
                </button>  
            </div>            
        </div>    
    </>
  )
}
