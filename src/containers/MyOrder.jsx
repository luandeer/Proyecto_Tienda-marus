import React, { useContext } from 'react'
import OrderItem from '../componentes/ordenItem/OrderItem'
import AppContext from '../context/AppContext'
import '../assets/css/MyOrder.scss'
import img from '../assets/icons/flechita.svg'
const MyOrder = ({ toggleOrders, setToggleOrders }) => {
	const { state } = useContext(AppContext);
	

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={img} alt="arrow" onClick={() => setToggleOrders(!toggleOrders)} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) => (
					<OrderItem
						indexValue={index}
						key={index}
						product={product}
	
					/>
				))}

				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	)
}

export default MyOrder