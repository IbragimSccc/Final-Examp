

import './style.css'
import { Card } from '../../components/card'
import { Category } from '../../components/categories'
import Sw from  '../../components/slider/slider.jsx'
export const HomePage = () => {

    return (
        <main>
            <section className='slider'>
                <Sw/>
            </section>
            <section>
                <div className="container">
                    <div className="content">
                        <div className="categories">
                            <Category />
                        </div>
                        <div className="card-content">                            
                            <Card/>
                        </div>
                    </div>                   
                </div>
            </section>
        </main>
    )
}