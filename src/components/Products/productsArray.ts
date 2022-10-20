type Product = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const productsArray: Product[] = [
    {
        name:"iPhone X",
        description:"This is iPhone X",
        type:"phone",
        capacity:64,
        price:500,
    },
    {
        name:"iPhone 13 Pro",
        description:"This is iPhone 13Pro",
        type:"phone",
        capacity:128,
        price:1000,
    },
    {
        name:"iPhone XS",
        description:"This is iPhone XS",
        type:"phone",
        capacity:512,
        price:800,
    },
    {
        name:"iPhone 14 Pro Max",
        description:"This is iPhone 14 Pro Max",
        type:"phone",
        capacity:256,
        price:200,
    },
    {
        name:"iPhone 8 plus",
        description:"This is iPhone 8 plus",
        type:"phone",
        capacity:64,
        price:500,
    },
    {
        name:"iPhone 12",
        description:"This is iPhone 12",
        type:"phone",
        capacity:128,
        price:100,
    }
]


export default productsArray