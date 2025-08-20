import { useState } from "react";

function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState("debitcard");

    return (
        <div className="checkout-page">
            <div className="back-btn">
                <i className="fas fa-arrow-left"></i>
            </div>

            <div className="checkout-main-content">
                <h2>Checkout</h2>
                <h3>Order Review</h3>
                <div className="order-review">
                    <div className="checkout-img">
                        <img src="/images/bgImg.png" alt="" />
                        <div className="checkout-image-overlay">
                            <button className="checkout-nav-button checkout-left">&lt;</button>
                            <button className="checkout-nav-button checkout-right">&gt;</button>
                        </div>
                    </div>

                    <div className="order-info">
                        <p className="ppt-type">Rent/Annum</p>
                        <p className="ppt-description">Luxury 3 Bedroom Detached Duplex</p>
                        <p className="location">Ikeja, Lagos.</p>
                        <div className="ppt-info">
                            <div>
                                <i className="fas fa-bed"></i>
                                <p>3 beds</p>
                            </div>
                            <div>
                                <i className="fas fa-bath"></i>
                                <p>3 baths</p>
                            </div>
                            <div>
                                <i className="fas fa-toilet"></i>
                                <p>3 toilet</p>
                            </div>
                        </div>
                        <button>Clear</button>
                    </div>

                </div>

                <div className="payment-method">
                    <h3>Choose a payment method</h3>
                    <p>Make payment to continue and confirm the order for further processing</p>

                    <div className="payment-options">
                        <div className="payment-option">
                            <i class="fa-brands fa-cc-mastercard fa-2x"></i>
                            <p>Debit card</p>
                            <label htmlFor="payment">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="debitcard"
                                    checked={paymentMethod === "debitcard"}
                                    onChange={() => setPaymentMethod("debitcard")}
                                />
                            </label>
                        </div>

                        <div className="payment-option">
                            <i class="fa-brands fa-cc-paypal fa-2x"></i>
                            <p>Paypal</p>
                            <label htmlFor="payment">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="paypal"
                                    checked={paymentMethod === "paypal"}
                                    onChange={() => setPaymentMethod("paypal")}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="card-info">
                    <h3>{paymentMethod === "debitcard" ? "Debit Card Information" : "PayPal Email Address"}</h3>
                    <div className="info">
                        {paymentMethod === "debitcard" ?
                            <div className="debit">
                                <input type="number" placeholder="Card Number" className="card-num" />
                                <div className="debit-form-group">
                                    <input type="number" placeholder="MM/YY" />
                                    <input type="number" placeholder="CVV" />
                                </div>
                                <div className="save-card">
                                    <input type="checkbox" />
                                    <p>Save card details for later use</p>
                                </div>
                            </div>
                            :
                            <div className="paypal">
                                <input type="text" placeholder="PayPal Address" />
                            </div>
                        }
                    </div>

                </div>

                <div className="total">
                    <p>Total:</p>
                    <p className="total">₦1,500,000</p>
                </div>

                <button className="confirm">Confirm Order</button>

            </div>

        </div>
    )
}

export default Checkout