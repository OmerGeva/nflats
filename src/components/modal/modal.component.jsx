import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ModalContainer } from './modal.styles'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_32XABxAY1gHiGeUoAOtX5pjW00QWVWTJAk');
const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            fontSize: '18px',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
  };

const CheckoutModal = ({show, handleClose, handleShow}) => {
    const handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;
        stripe
        .redirectToCheckout({
            lineItems: [
            // Replace with the ID of your price
            {price: 'price_1Hn97kB4yRy9h1Uj6V8cWNiR', quantity: 1},
            ],
            mode: 'payment',
            successUrl: 'https://your-website.com/success',
            cancelUrl: 'https://your-website.com/canceled',
        })
        .then(function(result) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        });

        };

    return (
      <ModalContainer>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          aria-labelledby="contained-modal-title-vcenter"
          keyboard={false}
          centered
          size="lg"
          dialogClassName="modal-styles"
        >
          <Modal.Header closeButton>
            <Modal.Title>Check Out</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Elements stripe={stripePromise}>
          <fieldset className="FormGroup">
            <div className="FormRow" style={{padding: '10%'}}>
            <CardElement options={CARD_OPTIONS} />
            </div>
        </fieldset>
        </Elements>
        <div style={{height: '20vh'}}></div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary"  role="link" onClick={handleClick}>continue</Button>
          </Modal.Footer>
        </Modal>
      </ModalContainer>
    );
  }

  export default CheckoutModal;