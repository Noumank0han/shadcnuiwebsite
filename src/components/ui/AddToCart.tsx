"use client"
import { ShoppingCart } from "lucide-react"
import { Button } from "./button"


const AddToCart = () => {
    return (
        <Button className="my-4" > <ShoppingCart className="mr-2 h-4 w-4" />  Add To Cart </Button>
    )
}

export default AddToCart