import ProductCard from "@/components/ProductCard"
import Wrapper from "@/components/shared/Wrapper"
import AddToCart from "@/components/ui/AddToCart"
import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image"


export default function Page({ params }: { params: { slug: string } }) {
    const getCategory = Products.filter((product) => product.category === params.slug)
    return (
        <Wrapper>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mobile:gap-20 mt-16'>
                {
                    getCategory.length > 0 ? (
                        getCategory.map((product) => (
                            <ProductCard
                                key={product.id}
                                img={product.image as StaticImageData}
                                title={product.name}
                                template={product.template}
                                price={product.price}
                                id={product.id}
                            />
                        ))
                    ) : <p> Items in this Category are out of stock </p>
                }
            </div>
        </Wrapper>
    )
}