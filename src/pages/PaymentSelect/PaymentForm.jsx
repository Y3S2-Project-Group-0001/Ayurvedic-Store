import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import PaymentSuccessModal from './Success'
import PaymentErrorModal from './Error'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#000000',
      color: '#541c00',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#000000' },
    },
    invalid: {
      iconColor: '#735800',
      color: '#735800',
    },
  },
}

export default function PaymentForm({
  subTotal,
  saveAddress,
  savePrice,
  cid,
  cart,
}) {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState('')

  function AddOrder() {
    console.log(cart)

    console.log('Attepting to add an order')
    const handleSubmit = async event => {
      // event.preventDefault()

      const data = {
        products: cart.products,
        subTotal: subTotal,
        shippingCost: savePrice,
        status: 'pending',
        address: saveAddress,
        customerId: cid,
      }

      console.log(data)

      try {
        const response = await axios.post(
          'http://localhost:8000/order/api/addNewOrder',
          data,
        )
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    handleSubmit()
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    //using strpe to make payment
    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await axios.post(
          'http://localhost:8000/payment/api/stripePay',
          {
            amount: subTotal,
            id,
          },
        )
        if (response.data.success) {
          console.log('payment with strip completed!')
          setMessage('')
          setSuccess(true)
          AddOrder()
        }
      } catch (error) {
        console.log('Error', error)
        setMessage(error)
      }
    } else {
      console.log(error.message)
      setMessage(error.message)
    }
  }

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <div style={{ paddingLeft: '320px' }}>
            <button>PAY</button>
          </div>
        </form>
      ) : (
        <div>
          <PaymentSuccessModal />
        </div>
      )}

      {message ? (
        <PaymentErrorModal closeModel={setMessage} message={message} />
      ) : (
        ''
      )}
    </>
  )
}
