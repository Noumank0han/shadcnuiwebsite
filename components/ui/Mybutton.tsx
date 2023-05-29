import { ShoppingCart } from "lucide-react"
import { Button } from "./button"


const Mybutton = () => {
    return (
        <Button className="my-4" >
            <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
        </Button>
    )
}

export default Mybutton