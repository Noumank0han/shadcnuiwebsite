"use client"
import Image from "next/image"
import { Search } from "lucide-react"
import { ShoppingCart } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "./../ui/navigation-menu"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-20 px-20">
            <Image alt="logo" src={"/Logo.webp"} width={150} height={150} />
            <div className="">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="space-x-5">
                            <NavigationMenuTrigger>Female</NavigationMenuTrigger>
                            <NavigationMenuTrigger>Male</NavigationMenuTrigger>
                            <NavigationMenuTrigger>Kids</NavigationMenuTrigger>
                            <NavigationMenuTrigger>All Products</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex">
                <Search className="bg-white rounded-l" />
                <input className="rounded-r" type="text" placeholder="What you are looking for" />
            </div>
            <div className="p-2 rounded-full bg-gray-200">
                <ShoppingCart className="relative" />
                <span className="absolute top-2 right-20  rounded-full bg-[#f02d34] h-6 w-6 text-center">0</span>
            </div>
        </nav>

    )
}

export default Navbar