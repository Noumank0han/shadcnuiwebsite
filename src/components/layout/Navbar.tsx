"use client";
import Image from "next/image"
import { ShoppingCart, AlignJustify, Search, X, Home } from "lucide-react"
import logo from "/public/Logo.webp"
import Link from "next/link"
import Wrapper from "../shared/Wrapper"
import { useState } from "react"


const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const handleNav = () => {
        setNavbar(!navbar)
    };

    return (
        <Wrapper>
            <nav className="relative flex w-full justify-between items-center h-4 sm:my-1">
                <Link className="" href={"/"}>
                    <Image alt="logo" src={logo} width={150} height={150} />
                </Link>
                <div className="relative w-full flex justify-center">
                    <div className="space-x-5 hidden lg:block">
                        <Link href={"category/Female"}>
                            <span>Female </span>
                        </Link>
                        <Link href={"category/Male"}>
                            <span> Male </span>
                        </Link>
                        <Link href={"category/Kids"}>
                            <span> Kids </span>
                        </Link>
                        <Link href={"products"}>
                            <span>All Products</span>
                        </Link>
                    </div>
                    <div className={`${navbar ? "hidden" : "absolute z-10 lg:hidden right-2"}`} onClick={handleNav}>
                        <AlignJustify />
                    </div>
                    <div className={`${navbar ? "flex justify-between absolute top-0 left-0 right-0 z-10 lg:hidden " : "hidden"}`} onClick={handleNav}>
                        <Link href={"/"}>
                            <Home />
                        </Link>
                        <X />
                    </div>
                </div>
                <div onClick={handleNav} className={`${navbar ? "absolute -top-1.5 pt-10 h-screen w-screen gap-10 bg-white z-0 flex flex-col items-center" : "hidden"}`}>
                    <Link href={"category/Female"}>
                        <span>Female </span>
                    </Link>
                    <Link href={"category/Male"}>
                        <span> Male </span>
                    </Link>
                    <Link href={"category/Kids"}>
                        <span> Kids </span>
                    </Link>
                    <Link href={"products"}>
                        <span>All Products</span>
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <Search className="bg-white rounded-l" />
                    <input className="rounded-r px-2" type="text" placeholder="What you are looking for" />
                </div>
                <div className="p-4 rounded-full bg-gray-100 relative hidden lg:block">
                    <ShoppingCart className="" />
                    <span className="absolute top-0 right-1 text-white font-bold  rounded-full bg-[#f02d34] h-6 w-6 text-center">0</span>
                </div>
            </nav>
        </Wrapper>
    )
}

export default Navbar