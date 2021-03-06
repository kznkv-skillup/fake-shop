import CartTotal from "components/Cart/CartTotal"
import CartProductList from "components/Cart/CartProductList"
import { Grid, Typography } from "@mui/material"
import CartProductListItemExtended from "components/Cart/CartProductListItemExtended"

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
}

const CartPage = ({ productsInCart, removeProductFromCart }: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    margin: "40px 0 20px",
                }}
            >
                CART
            </Typography>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
