import { StaticImageData } from "next/image";

export type Product = {
    id: number | string;
    name: string;
    template: string;
    price: number;
    category: string;
    image: string | StaticImageData;
}