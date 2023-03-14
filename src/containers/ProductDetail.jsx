import React from 'react'
import ProductInfo from '../componentes/ProductInfo/ProductInfo'
import '../assets/css/ProductDetail.scss'
const ProductDetail = () => {
    return (
        <aside className="ProductDetail">
            <div className="ProductDetail-close">
                <img src="./icons/icon_close.png" alt="close" />
            </div>
            <ProductInfo />
        </aside>
    )
}

export default ProductDetail