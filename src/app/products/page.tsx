import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mock";

const AllProducts = () => {
    return (
        <div className='flex justify-evenly mt-16 flex-wrap'>
            {
                Products.map((product) => (
                    <ProductCard
                        key={product.id}
                        img={product.image}
                        title={product.name}
                        price={product.price}
                        category={product.category}
                        id={product.id}
                    />
                )
                )
            }
        </div>

    )
};

export default AllProducts;