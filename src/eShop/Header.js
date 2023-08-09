import React from 'react';
import "./Header.css"
function HeaderLogo(){
    return(
    <div className="main">
        <div className="header__logo">
        <ion-icon className="header__logoImage" size="large" name="storefront-outline"></ion-icon>
       <h2 className="hedder_logoTitle">eShop</h2>
        </div>

        <div className="header__search">
        <input type="text" className='header__SearchInput' placeholder='Search Here!'></input>
        <ion-icon className="header__searchIcon" name="search-circle-outline"></ion-icon>
        </div>

        <div className="header__nav">
            <div className="nav__item">
                <span className="nav__itemLineOne">Welcome</span>
                <span className="nav__itemLineTwo">SignIn</span>
            </div>
            <div className="nav__item">
            <span className="nav__itemLineOne">your</span>
                <span className="nav__itemLineTwo">shop</span>
            </div>
            <div className="nav__item">
            {/* <span className="nav__itemLineOne">Basket</span> */}
            <ion-icon className="item__basket" name="basket-outline"></ion-icon>
                <span className="nav__itemLineTwo nav__basketCount">0</span>
            </div>
        </div>
    </div>
    );
}
export default HeaderLogo