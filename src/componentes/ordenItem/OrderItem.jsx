import React, { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'
import './OrderItem.scss'
import img from '../../assets/icons/icon_close.png'

const OrderItem = ({ product, indexValue }) => {
	const { removeFromCart } = useContext(AppContext);
	const [count, setCount] = useState(1);

	const handleRemove = (index) => {
		removeFromCart(index)
	}
	
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>

			<div className='cantidad'>
				<p>cant.</p>
				<button disabled={count<=1} onClick={() => setCount(count - 1)}>-</button>
				<span>{count}</span>
				<button onClick={() => setCount(count + 1)}>+</button>
			</div>
			
			<p>${product.price*count}</p>
			<img src={img} alt="close" onClick={() => handleRemove(indexValue)} />
		</div>
	)
}

export default OrderItem