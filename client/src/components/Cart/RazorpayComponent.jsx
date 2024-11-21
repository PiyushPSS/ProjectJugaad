import React from 'react'
import { RazorPayOptions } from '../../../RazorPayOptions';

const RazorpayComponent = (productData) => {

    var rzp1 = new Razorpay(RazorPayOptions(productData.Price));

    function openRazorpay() {
        rzp1.open();
    }

    return (
        <div>
            {openRazorpay}
        </div>
    )
}

export default RazorpayComponent