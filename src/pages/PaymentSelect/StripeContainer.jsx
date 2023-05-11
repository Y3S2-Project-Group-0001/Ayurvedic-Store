import React from 'react'
import { Element, Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
import './style.css'
// import CheckoutForm from './CheckoutForm'

const PUBLIC_KEY =
  'pk_test_51N1AX3FnH26RCzINC4CXzO9GsxEYynskstpJ14oxsEHYyV6YhvhGFyUeCGpZc9Iyo2mKlWI2wSuEmx9LEvf9VX8w00A2vpgluh'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripContainer({
  subTotal,
  saveAddress,
  savePrice,
  cid,
  cart,
}) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm
        subTotal={subTotal}
        saveAddress={saveAddress}
        savePrice={savePrice}
        cid={cid}
        cart={cart}
      />
    </Elements>
  )
}
