import React from 'react'

import StripeCheckout from "react-stripe-checkout"

const StripeButton = ({ price }) => {

    const priceForStripe = price*100
    const publshableKey = "pk_test_ZLdZTgNQORFe9FBeFNqHFACX00KdbMaupq"
    const onToken = token => {
        console.log(token)
        alert("Payment successful")
    }
    return (

       
    
            <StripeCheckout 
            label="Pay Now"
            name="Clothing Store, Inc."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publshableKey}

            />
    )

}
export default StripeButton