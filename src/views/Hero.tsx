import Image from "next/image"
import Mybutton from "../components/ui/Mybutton"
import mainImage from "/public/nouman.png"

const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row gap-y-10 py-6">
            <div className="flex-1">
                <span className="inline-block font-bold text-blue-600 bg-blue-200 py-2 px-5 rounded-md">Sale 70%</span>
                <h1 className="mt-9 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    An Industrial Take on Streetwear
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl">
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                <Mybutton />
                <div className="flex space-x-4">
                    <Image width={120} height={90} src="/img1.webp" alt="first image" />
                    <Image width={120} height={90} src="/img2.webp" alt="second image" />
                    <Image width={120} height={90} src="/img3.webp" alt="third image" />
                    <Image width={120} height={90} src="/img4.webp" alt="fourth image" />
                </div>
            </div>
            <div className="hidden md:flex flex-1 justify-center items-center ">
                <div className=" bg-[#969F95] z-0 flex justify-center items-center rounded-full h-[22rem] w-[22rem]">
                    <Image className="bg-fixed z-10" src={mainImage} alt="nouman image" />
                </div>
            </div>
        </section>
    )
}

export default Hero