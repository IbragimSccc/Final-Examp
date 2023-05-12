import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './style.css'



export const CreatePage = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');  
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [user, setUser] = useState('');
    const [image, setImage] = useState('');
    const { id } = useParams()
    const [data, setData] = useState(null)

    const clearForm = () => {
        setName('');
        setPrice('');    
        setDescription('');
        setCategory('');
        setUser('');
        setImage('');
    }

    useEffect(() => {
        if (!id) return
            fetch(`http://16.171.59.219/api/v1/items/product/${id}/`)
                .then(res => res.json())
                .then(setData)
    }, [id])

    useEffect(() => {
        if (!id) return
            setName(data?.name)
            setPrice(data?.price)
            setCategory(data?.Category) 
            setDescription(data?.description)
            setUser(data?.user)    
    }, [data])


    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('user', user);
        formData.append('image', image);
      
        if (!id) {
            fetch('http://16.171.59.219/api/v1/items/product/', {
                method: 'POST',
                headers: {
                    'Authorization': localStorage.getItem('token'),
            },
                body: formData,
            })
                .then(res => res.json())
                .then(responseData => {                    
                    console.log('Товар успешно создан:', responseData);
                clearForm();
            })
                .catch(error => {              
                    console.error('Ошибка при создании товара:', error);
            })
        } else {
          
            fetch(`http://16.171.59.219/api/v1/items/product/${id}/`, {
                method: 'PUT',
                headers: {
                    'Authorization': localStorage.getItem('token'),
            },
                body: formData,
            })
                .then(res => res.json())
                .then(responseData => {              
                    console.log('Товар успешно обновлен:', responseData);
                clearForm();
            })
                .catch(error => {              
                    console.error('Ошибка при обновлении товара:', error);
            })
        }      
        clearForm()
    }
      

    return (
        <div className="form-submit">
            <form className="form-block" onSubmit={handleSubmit}>
                <div className="input-form">
                    <label htmlFor="name">Название</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>     
                <div className="input-form">
                    <label htmlFor="price">Цена</label>
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="input-form">
                    <label htmlFor="user">Пользователь</label>
                    <input
                        type="text"
                        id="user"
                        value={user}
                        onChange={(e) => setUser(e.target.value)} />
                </div>      
                <div className="input-form">
                    <label htmlFor="category">Категория</label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} />
                </div>      
                <div className="input-form">
                    <label htmlFor="description">Описание</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="input-form">
                    <label htmlFor=" image">Фото</label>
                    <input
                        type="file"
                        id="image"
                        onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="input-form">
                    <button
                        type="submit"
                        onClick={handleSubmit}>
                    {!id ? 'Создать ' : 'Редактировать '}
                    Телефон
                    </button>
                </div>
            </form>
        </div>
    ) 
}

