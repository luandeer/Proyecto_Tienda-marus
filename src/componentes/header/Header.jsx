import React from 'react'
import './header.scss'
import Img1 from '../../assets/icons/icon_menu.svg'
import Img2 from '../../assets/img/logo_yard_sale.svg'
import Img3 from '../../assets/icons/icon_shopping_cart.svg'
const Header = () => {
    return (
        <nav>
            <img src={Img1} alt="menu" className="menu" />

            <div className="navbar-left">
                <img src={Img2} alt="logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">platzi@example.com</li>
                    <li className="navbar-shopping-cart">
                        <img src={Img3} alt="shopping cart" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header