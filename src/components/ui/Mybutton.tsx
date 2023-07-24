import { ShoppingCart } from "lucide-react"
import { Button } from "./button"


const Mybutton = () => {
    return (
        <Button className="my-4 py-8 w-3/5  text-lg" >
            <ShoppingCart className="mr-2 h-6 w-6" /> Start Shopping
        </Button>
    )
}

export default Mybutton