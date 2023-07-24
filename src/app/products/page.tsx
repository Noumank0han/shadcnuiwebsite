import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/shared/Wrapper";
import AddToCart from "@/components/ui/AddToCart";
import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";

const AllProducts = () => {
    return (
        <Wrapper>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-20 mt-16 '>
                {
                    Products.map((product) => (
                        <ProductCard
                            className=""
                            key={product.id}
                            img={product.image as StaticImageData}
                            title={product.name}
                            template={product.template}
                            price={product.price}
                            id={product.id}
                        />
                    )
                    )
                }
            </div>
        </Wrapper>
    )
};

export default AllProducts;