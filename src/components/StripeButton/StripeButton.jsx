import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KgNv0FUPG5gtdADqXIpfe9WZwYDDnwHYq3vm3FjneVJfmIJ5DHTdCRMI3figk651msnQyApU7M1T5Uj74EIsOsw00vQYhTfJC';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull');
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="Clothing Ltd"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is ${price}$`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey= {publishableKey}
        />
    )
};

export default StripeButton;