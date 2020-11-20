import React, { useState } from 'react';
import { CheckoutTotalContainer } from './checkout-total.styles';
import { useSelector } from 'react-redux';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const CheckoutTotal = () => {
    // For modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const numberOfItems = useSelector(state => state.cart.itemCount);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const cart = useSelector(state => state.cart.cartItems);
    // For modal
    const getPrice = item => {
        console.log(item);
        let priceID = '';
        switch(item.title) {
            case 'Singular Daily Pick':
                priceID = process.env.REACT_APP_DAILY_PICK
              break;
            case 'NFL ATS All Access Subscription':
                priceID = process.env.REACT_APP_ALL_ACCESS
                break;
            case 'Weekly Best Bets':
                priceID = process.env.REACT_APP_BI_ACCESS
                break;
            case 'Bi-Weekly NFL ATS All Access Subscription':
                priceID = process.env.REACT_APP_WEEK_BETS
                break;
            default:
                priceID = process.env.REACT_APP_FULL_SEASON
          }
        return priceID;
    }
    const handleClick = async (event) => {
        const stripeCheckoutLineItems = cart.map(item => {

            return {
                quantity: item.quantity,
                price: getPrice(item)
            }
        })
        console.log(stripeCheckoutLineItems);
        // Get Stripe.js instance
        const stripe = await stripePromise;
        stripe
        .redirectToCheckout({
            lineItems: stripeCheckoutLineItems,
            mode: 'payment',
            successUrl: 'https://nflats.net/',
            cancelUrl: 'https://nflats.net/',
        })
        .then(function(result) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        });

        };
    

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
             <div className='checkout-btn' onClick={handleClick}>
                Checkout
            </div>
        </CheckoutTotalContainer>
    )
}

export default CheckoutTotal;