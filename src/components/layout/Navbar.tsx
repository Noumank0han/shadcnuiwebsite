"use client"
import Image from "next/image"
import { Search } from "lucide-react"
import { ShoppingCart } from "lucide-react"
import logo from "/public/Logo.webp"
import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "../ui/navigation-menu"

const Navbar = () => {
    return (
        <nav className="flex w-full justify-between items-center h-20 px-10">
            <Link href={"/"}>
                <Image alt="logo" src={logo} width={150} height={150} />
            </Link>
            <div className="">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="space-x-5">
                            <Link href={"category/female"}>
                                <NavigationMenuTrigger>Female </NavigationMenuTrigger>
                            </Link>
                            <Link href={"category/male"}>
                                <NavigationMenuTrigger> Male </NavigationMenuTrigger>
                            </Link>
                            <Link href={"category/kids"}>
                                <NavigationMenuTrigger> Kids </NavigationMenuTrigger>
                            </Link>
                            <Link href={"products"}>
                                <NavigationMenuTrigger>All Products</NavigationMenuTrigger>
                            </Link>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex">
                <Search className="bg-white rounded-l" />
                <input className="rounded-r px-2" type="text" placeholder="What you are looking for" />
            </div>
            <div className="p-4 rounded-full bg-gray-100 relative">
                <ShoppingCart className="" />
                <span className="absolute top-0 right-1 text-white font-bold  rounded-full bg-[#f02d34] h-6 w-6 text-center">0</span>
            </div>
        </nav>

    )
}

export default Navbar