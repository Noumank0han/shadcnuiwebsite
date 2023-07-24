import React from 'react'
import P1 from "/public/belowhero3.webp"
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import { Products } from '@/utils/mock'
import Wrapper from '@/components/shared/Wrapper'
import AddToCart from '@/components/ui/AddToCart'

const ProductList = () => {
    const productChunks = Products.slice(0, 5);
    return (
        <Wrapper>
            <Swiper></Swiper>
            <div className='flex flex-col items-center w-full'>
                <div className='mt-20 font-bold text-blue-600 flex justify-center text-sm'>PRODUCTS</div>
                <div className='font-bold text-4xl flex justify-center mt-6'>Check What We Have</div>
                <div className='flex w-full justify-center mx-auto flex-wrap mt-10'>
                    {
                        productChunks.map((product) => (
                            <div className='flex flex-col items-center justify-center w-full lg:w-1/2 xl:w-1/3'>

                                <ProductCard
                                    className='flex flex-col items-center'
                                    key={product.id}
                                    img={product.image}
                                    title={product.name}
                                    price={product.price}
                                />
                            </div>
                        )
                        )
                    }
                    {/* <ProductCard img={P1} title='First Image' price={105} />
            <ProductCard img={P1} title='Second Image' price={135} />
            <ProductCard img={P1} title='Third Image' price={157} /> */}
                </div>
            </div>
        </Wrapper>
    )
}

export default ProductList