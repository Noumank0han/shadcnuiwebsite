import React from 'react'
import P1 from "/public/belowhero3.webp"
import Image, { StaticImageData } from 'next/image'
import AddToCart from './ui/AddToCart'
import Link from 'next/link'

function ProductCard(props: { title: string, price?: number, template?: string, img: string | StaticImageData, category?: string, id?: number, className?: string, button?: React.ReactNode }) {
    return (
        <Link href={`/products/${props.id}`} >
            <div className={"my-5 space-y-1 " + props.className}>
                <Image src={props.img} alt="Image" />
                <h1 className='text-lg font-bold'>{props.title}</h1>
                <h1 className='text-base text-gray-500 font-bold'>{props.template}</h1>
                <p className='text-xl font-bold'>{props.price ? "$" + props.price : null}</p>
                <p className='text-lg font-bold'> {props.category ? "Category: " + props.category : null}</p>
                {props.button}
            </div>
        </Link>
    )
}

export default ProductCard