import React from 'react'
import P1 from "/public/belowhero3.webp"
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import { Products } from '@/utils/mock'

const ProductList = () => {
    const productChunks = Products.slice(0, 3);
    return (
        <div className='flex flex-col items-center w-full'>
            <div className='mt-20 font-bold text-blue-600 flex justify-center'>PRODUCTS</div>
            <div className='font-bold text-3xl flex justify-center mt-6'>Check What We Have</div>
            <div className='flex w-full justify-between flex-wrap mt-10'>
                {
                    productChunks.map((product) => (
                        <ProductCard
                            key={product.id}
                            img={product.image}
                            title={product.name}
                            price={product.price}
                        />
                    )
                    )
                }
                {/* <ProductCard img={P1} title='First Image' price={105} />
            <ProductCard img={P1} title='Second Image' price={135} />
            <ProductCard img={P1} title='Third Image' price={157} /> */}
            </div>
        </div>
    )
}

export default ProductList