import { Container } from "@mui/material"
import AboutPage from "pages/About/AboutPage"
import CartPage from "pages/Cart/CartPage"
import CheckoutPage from "pages/Checkout/CheckoutPage"
import Home from "pages/Home/Home"
import PaymentPage from "pages/Payment/PaymentPage"
import ShippingPage from "pages/Shipping/ShippingPage"
import { Routes, Route } from "react-router-dom"

const Main = () => {
    return (
        <main>
            <Container maxWidth="lg">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="shipping" element={<ShippingPage />} />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                </Routes>
            </Container>
        </main>
    )
}

export default Main
