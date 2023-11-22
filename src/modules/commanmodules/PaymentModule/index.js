import {Button} from '@mui/material';
import axios from 'axios';
import React from 'react';
import logo from '../../../assets/icon/401.svg';

export default function PaymentModule() {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay() {
    console.log('Testing');
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js',
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    // creating a new order
    const result = await axios.post('http://localhost:4000/payment/orders', {
      CourseID: 'ID-18',
      PayTypeID: '655618ae9a506c1bd6b763ab',
      DiscountCoupon: 'DIWALI',
    });

    if (!result) {
      alert('Server error. Are you online?');
      return;
    }

    // Getting the order details back
    const {amount, id: order_id, currency} = result.data;

    const options = {
      key: 'rzp_test_C7ah6AISScKMcn', // Enter the Key ID generated from the Dashboard of Razorpay
      amount: amount.toString(),
      currency: currency,
      name: 'Agilewaters ',
      order_id: order_id,
      // Below are the optional parameters
      description: 'Test Transaction',
      image: {logo},
      handler: async function (response) {
        // console.log('Testing41',resonse)
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        console.log('Testing4', data);

        const result = await axios.post(
          'http://localhost:4000/payment/success',
          data,
        );

        alert(result.data.msg);
      },
      prefill: {
        name: 'Customer Details',
        email: 'prajaktaweb@gmail.com',
        contact: '+919823217284',
      },
      notes: {
        address: 'Soumya Dey Corporate Office',
      },
      theme: {
        color: '#61dafb',
      },
    };
    console.log('Options', options);
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <div>
      PaymentModule
      <Button onClick={displayRazorpay}>Pay Now</Button>
    </div>
  );
}
