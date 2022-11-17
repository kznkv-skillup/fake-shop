import { Button, Card, CardActions, CardContent } from "@mui/material"
import Quantity from "components/Quantity/Quantity"
import { useState } from "react"
import "./ProductListItem.scss"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { useAppSelector } from "redux/hooks"

type Props = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
    addProductToCart: (id: number, count: number) => void
}

const ProductListItem = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () =>
        setCount((prevState: number) => prevState + 1)

    const onDecrementClick = () =>
        setCount((prevState: number) => prevState - 1)

    const isLiked = useAppSelector((state) => state.productsLikeState[id])

    return (
        <Card className="product">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt={name} />
                </div>
                <Button>
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <h4>{name}</h4>
                <p className="product-description">{description}</p>
                <div className="product-features">
                    <span>Type: </span>
                    {type}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {capacity} Gb
                </div>
                <div className="product-price">Price: {price} $</div>
                <Quantity
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                    count={count}
                />
            </CardContent>
            <CardActions className="btn-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
