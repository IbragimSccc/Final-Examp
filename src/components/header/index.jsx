import './style.css'
import { Link } from 'react-router-dom'
import { BasketIcon } from './basket-svg'

export const Header = () => {
    return (
        <>
        <header>
            <div className="left-side">
                <div className="header-logo">
                    <Link to="/">
                        <img src="./images/Smart.jpg" alt="" />
                    </Link>                    
                </div>
                <div className="header-info">
                    <h1>Smart Shop</h1>
                    <p>Магазин телефонов</p>
                </div>
            </div>
            <div className="right-side">
                <a href="tel:+996708877708">+996 708 877 708</a>
                <Link to="/basket">
                    <button>
                        <BasketIcon />
                    </button>
                </Link>                
            </div>
            </header>
        </>
    )
  } 