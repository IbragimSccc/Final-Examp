import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import './style.css'

export const CreateItem = (product) => {
    const [isDeleted, setIsDeleted] = useState(false)
    const [items, setItems] = useState([])

    const handleDelete = async () => {
        const response = await fetch(`http://16.171.59.219/api/v1/items/product/${product.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })

        if (response.ok) {
            setIsDeleted(true)
        }
    }

    useEffect(() => {
        if (isDeleted) {
            const updatedItems = items.filter(item => item.id !== product.id)
            setItems(updatedItems);
        }
    }, [isDeleted])

    if (isDeleted) {
        return null
    }
    
    return (
        <>
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
              
                <div className="right">
                    <button className="delete-item" onClick={handleDelete} >
                        <svg width="16" height="16" viewBox="0 -1 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" fill="black"/>
                        </svg>
                    </button>
                    <NavLink to={`/create/${product.id}`} className="create-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -1 30 30">
                        <path d="M21.707,4.475,19.525,2.293a1,1,0,0,0-1.414,0L9.384,11.021a.977.977,0,0,0-.241.39L8.052,14.684A1,1,0,0,0,9,16a.987.987,0,0,0,.316-.052l3.273-1.091a.977.977,0,0,0,.39-.241l8.728-8.727A1,1,0,0,0,21.707,4.475Zm-9.975,8.56-1.151.384.384-1.151,7.853-7.854.768.768ZM2,6A1,1,0,0,1,3,5h8a1,1,0,0,1,0,2H4V20H17V13a1,1,0,0,1,2,0v8a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1Z" />
                        </svg>
                    </NavLink>
                </div>
            </div>            
        </>
    )
} 