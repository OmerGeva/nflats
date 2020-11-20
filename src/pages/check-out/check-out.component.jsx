import React  from 'react'
import { CheckOutPageContainer } from './check-out.styles'
import { useDispatch, useSelector } from 'react-redux'
import Package from '../../components/package/package.component'
import CheckoutTotal from '../../components/checkout-total/checkout-total.component'
const CheckOutPage = () => {
    const cart = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    return (
        <CheckOutPageContainer>
            <h1>
                Your Cart
            </h1>
            <div className="packages-and-total">
                <div className="packages-container">
                {
                    cart.map(cartItem => 
                        <Package key={cartItem.id} 
                        title={cartItem.title} 
                        price={cartItem.price} 
                        removeItem 
                        quantity={cartItem.quantity}/>
                        )
                    }
                </div>
                <div className="checkout-total-container">
                 <CheckoutTotal />
                </div>
            </div>
        </CheckOutPageContainer>
    )
}

export default CheckOutPage;