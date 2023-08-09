import React from 'react';
import Product from './Product';
import './Home.css'
// import Product from "./Product"
function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__Continer">
            <img src="https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg" alt="" className="home__image"/>

                
            <div className="home__row">
                    <Product /> 
                    <Product /> 
                    <Product /> 
                </div>
                <div className="home__row">
                    <Product /> 
                    <Product />  
                </div>
                <div className="home__row">
                    {/* <Product />  */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home