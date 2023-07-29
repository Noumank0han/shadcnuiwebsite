import Counter from "@/components/Counter"
import ImagesHover from "@/components/ImagesHover"
import ProductCard from "@/components/ProductCard"
import Wrapper from "@/components/shared/Wrapper"
import AddToCart from "@/components/ui/AddToCart"
import { Products } from "@/utils/mock"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"

let size = ["XS", "S", "M", "L", "XL"]

export default function Page({ params }: { params: { id: number } }) {
    const getDetails = Products.filter((product) => product.id == params.id)
    return (
        <Wrapper>
            <div className='flex justify-start  pt-16 flex-wrap'>
                {
                    getDetails.map((product) => (
                        <div key={product.id} className="flex flex-col pl-20 lg:flex-row justify-between gap-5">
                            <ImagesHover />
                            <div className="mt-20">
                                <h1 className="text-3xl ">{product.name}</h1>
                                <h3 className="text-xl text-gray-400">{product.template}</h3>
                                <h4 className="text-sm mt-6 font-medium">SELECT SIZE</h4>
                                <div className="flex gap-2 mt-3">
                                    {size.map((item) => <span key={size.indexOf(item)} className="flex rounded-full bg-gray-50 font-semibold text-sm p-2 h-8 w-8 justify-center items-center hover:shadow-xl shadow-black hover:cursor-pointer hover:bg-white">{item}</span>)}
                                </div>
                                <Counter />
                                <div className="flex gap-2 items-center">
                                    <AddToCart />
                                    <span className="font-bold text-2xl">${product.price.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="mt-20 mx-16 px-16 py-10 bg-white ">
                    <div className="relative">
                        <h3 className="absolute z-10 flex text-2xl h-24 items-center font-bold">Product Information </h3>
                        <p className=" flex items-center text-gray-100  text-8xl font-bold top-0 "> Overview </p>
                    </div>
                    <hr className="mt-2 text-black-500 mb-4" />
                    <div className="flex">
                        <h4 className="text-lg font-bold mb-2 w-1/3">PRODUCT DETAILS</h4>
                        <p className="text-gray-700 w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="flex mt-5">
                        <h4 className="text-lg font-bold mb-2 w-1/3">PRODUCT CARE</h4>
                        <p className="text-gray-700 w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor molestiae officia accusantium culpa dignissimos consequuntur quia minima quas nam vel, voluptas earum cupiditate, cum ullam quis porro vero accusamus.</p>
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}