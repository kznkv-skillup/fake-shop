import React, { useState } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Header from "container/Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import { StyledEngineProvider } from "@mui/material"
import "style/style.scss"
import { omit } from "lodash"

type Props = {}

type AppProps = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<AppProps>({
        1: 5,
        2: 5,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: AppProps) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState: AppProps) => omit(prevState, id))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
            />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
