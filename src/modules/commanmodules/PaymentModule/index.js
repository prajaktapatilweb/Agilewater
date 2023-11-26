import {Button} from '@mui/material';
import axios from 'axios';
import React from 'react';
import logo from '../../../assets/icon/401.svg';
import router from 'next/router';
import PropTypes from 'prop-types';

export default function PaymentModule({
  CourseID,
  DiscountCoupon,
  RegisterationDetails,
  clearAll,
  disableOp,
  PartcipantDetails,
  GSTDetail,
}) {
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
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js',
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    // creating a new order
    const result = await axios.post('http://localhost:4000/payment/orders', {
      CourseID: CourseID,
      PayTypeID: RegisterationDetails,
      DiscountCoupon: DiscountCoupon,
      PartcipantDetails: PartcipantDetails,
      GSTDetail: GSTDetail,
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
        clearAll();

        // alert(result.data.msg);
      },
      prefill: {
        name: PartcipantDetails[0].Name,
        email: PartcipantDetails[0].Email,
        contact: PartcipantDetails[0].Phone,
      },
      // notes: {
      //   address: 'NA',
      // },
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
      <Button
        disabled={disableOp}
        color='primary'
        variant='contained'
        onClick={displayRazorpay}
      >
        Pay Now
      </Button>
    </div>
  );
}

PaymentModule.propTypes = {
  CourseID: PropTypes.string,
  DiscountCoupon: PropTypes.Object,
  RegisterationDetails: PropTypes.Object,
  clearAll: PropTypes.func,
  disableOp: PropTypes.func,
  PartcipantDetails: PropTypes.array,
  GSTDetail: PropTypes.Object,
};
