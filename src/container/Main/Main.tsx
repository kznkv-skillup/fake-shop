import { Container } from "@mui/material"
import AboutPage from "pages/About/AboutPage"
import CartPage from "pages/Cart/CartPage"
import Home from "pages/Home/Home"
import PaymentPage from "pages/Payment/PaymentPage"
import ShippingPage from "pages/Shipping/ShippingPage"
import { Routes, Route } from "react-router-dom"

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
}

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
}: Props) => {
    return (
        <main>
            <Container maxWidth="lg">
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                            />
                        }
                    />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="shipping" element={<ShippingPage />} />
                    <Route path="payment" element={<PaymentPage />} />
                </Routes>
            </Container>
        </main>
    )
}

export default Main
