import React from 'react';
import {Box, Stack} from '@chakra-ui/react';
import Card from './Card';
import axios from 'axios';


const PaymentHome = () => {
    const checkoutHandler =async (amount) => {
        
        const {data:{key}} = await axios.get("http://localhost:4000/api/getkey")

        const { data:{order}  } = await axios.post("http://localhost:4000/api/checkout",{
            amount
        })
        const options = {
            key, 
            amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Rahul Kumar",
            description: "Test Transaction RazorPay",
            image: "https://avatars.githubusercontent.com/u/72328981?s=400&u=0ce5068287e9a262759d480bb4f9e5cd4a601d87&v=4",
            order_id: order.id, 
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        }
        const razor = new window.Razorpay(options);
        razor.open();

        
    }


  return (
    <Box>
        <Stack height="100vh" alignItems="center" justifyContent="center" direction={["column", "row"]}>

            <Card amount={5000} img = {"https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} checkoutHandler={checkoutHandler}/>
            <Card amount={3000} img = {"data:image/jpeg;base64,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"} checkoutHandler={checkoutHandler}/>
        </Stack>
    </Box>
  )
}

export default PaymentHome;
