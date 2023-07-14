import ProductCard from "@/components/ProductCard"
import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image"


export default function Page({ params }: { params: { slug: string } }) {
    const getCategory = Products.filter((product) => product.category === params.slug)
    return (
        <div className='flex justify-evenly mt-16 flex-wrap'>
            {
                getCategory.length > 0 ? (
                    getCategory.map((product) => (
                        <ProductCard
                            key={product.id}
                            img={product.image as StaticImageData}
                            title={product.name}
                            price={product.price}
                            category={product.category}
                            id={product.id}
                        />
                    ))
                ) : <p> Items in this Category are out of stock </p>
            }
        </div>
    )
}