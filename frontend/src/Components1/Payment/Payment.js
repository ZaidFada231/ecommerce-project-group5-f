import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

import { Box } from "@mui/material";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://backend-ecommerce-f.onrender.com/server/config").then(
      async (r) => {
        const { publishableKey } = await r.json();
        setStripePromise(loadStripe(publishableKey));
        console.log("p", stripePromise);
      }
    );
  }, []);

  useEffect(() => {
    fetch(
      "https://backend-ecommerce-f.onrender.com/server/create-payment-intent",
      {
        method: "POST",
        body: JSON.stringify({}),
      }
    ).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
      console.log(clientSecret);
    });
  }, []);

  return (
    <>
      <Box height={70}></Box>
      <h1>Checkout Now 💵</h1>
      {clientSecret !== "" && stripePromise !== null && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
