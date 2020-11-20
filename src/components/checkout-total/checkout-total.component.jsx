import React, { useState } from 'react';
import { CheckoutTotalContainer } from './checkout-total.styles';
import { useSelector } from 'react-redux';
import CheckoutModal from '../modal/modal.component'

const CheckoutTotal = () => {
    // For modal
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // For modal


    
    const numberOfItems = useSelector(state => state.cart.itemCount);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    return (
        <CheckoutTotalContainer>
            <h3>Your Total</h3>
            <div className="total-info">

            <p>Number of items: </p>
            <p>{numberOfItems}</p>
            </div>
            <div className="total-info">

            <p>Total Price: </p>
            <p>$ {totalPrice}</p>
            </div> 
             <div className='checkout-btn' onClick={handleShow}>
                Checkout
            </div>
            <CheckoutModal show={show} handleClose={handleClose} handleShow={handleShow} />
        </CheckoutTotalContainer>
    )
}

export default CheckoutTotal;