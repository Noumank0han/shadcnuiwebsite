import React from 'react'
import P1 from "/public/belowhero3.webp"
import Image, { StaticImageData } from 'next/image'
import AddToCart from './ui/AddToCart'
import Link from 'next/link'

function ProductCard(props: { title: string, price: number, img: string | StaticImageData, category?: string, id?: number }) {
    return (
        <Link href={`/products/${props.id}`} >
            <div className='my-5'>
                <Image src={props.img} alt="Image" />
                <h1 className='text-lg font-bold mt-3'>{props.title}</h1>
                <p className='text-lg font-bold'>${props.price}</p>
                {props.category ? (<p dangerouslySetInnerHTML={{ __html: props.category }} />) : null}
                <AddToCart />
            </div>
        </Link>
    )
}

export default ProductCard