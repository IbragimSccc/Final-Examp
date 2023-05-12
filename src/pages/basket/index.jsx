import { useContext } from "react"
import { AppContext } from "../../App"
import { Link } from "react-router-dom"
import "./style.css"

export const BasketPage = () => {
  const { products: productItems, setProducts } = useContext(AppContext)

  const handleDeleteItem = (itemId) => {
    const updatedItems = productItems.filter((item) => item.id !== itemId);
    setProducts(updatedItems);
  }

  return (
    <div className="basket-box">
      <h3>Корзина</h3>
      {productItems.length === 0 ? (
        <div className="basket-wrapper">
          <div className="box-img">
            <img src="./images/image 8.jpg" alt="" />
            <h4>Корзина пустая</h4>
            <p> Вы нищеброд?  Оформите хотя бы один заказ.</p>
          </div>
          <Link to="/">
            <button>Вернуться на главную</button>
          </Link>
        </div>
      ) : (
        <div className="items-block">
          {productItems.map((product) => (
            <div key={product.id} className="item">
              <div className="left">
                <div className="item-img">
                  <img src={product.image} alt="" />
                </div>              
                <div className="item-info">
                  <span>{product.name}</span>
                  <p> {product.price} $</p>
                </div>
              </div>
              
              <button className="delete-item" onClick={() => handleDeleteItem(product.id)}>
                <svg width="16" height="16" viewBox="0 -1 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" fill="black"/>
                </svg>
              </button>
            </div>            
          ))}
        </div>
      )}
    </div>
  )
}
