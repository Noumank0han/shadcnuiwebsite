import Image from "next/image"
import Mybutton from "../components/ui/Mybutton"
import mainImage from "/public/header.webp"
import Wrapper from "@/components/shared/Wrapper"

const Hero = () => {
    return (
        <Wrapper>
            <section className="flex flex-col lg:flex-row h-[vh] gap-y-10 gap-x-8 py-6 pt-16 sm:pt-5 md:pt-16">
                <div className="w-full lg:w-1/3 ">
                    <div className="md:w-4/5">
                        <span className="inline-block font-bold text-blue-600 bg-blue-200 py-2 px-5 rounded-md">Sale 70%</span>
                        <h1 className="mt-9 scroll-m-20 text-5xl sm:text-6xl font-bold tracking-tight ">
                            An Industrial Take on Streetwear
                        </h1>
                        <p className="leading-7 my-8 text-lg">
                            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                        </p>
                        <Mybutton />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 mt-5 gap-6">
                        <Image width={120} height={90} src="/img1.webp" alt="first image" />
                        <Image width={120} height={90} src="/img2.webp" alt="second image" />
                        <Image width={120} height={90} src="/img3.webp" alt="third image" />
                        <Image width={120} height={90} src="/img4.webp" alt="fourth image" />
                    </div>
                </div>
                <div className="hidden lg:flex w-2/3 justify-center items-center ">
                    <div className="bg-red-100 z-0 flex justify-center items-center rounded-full h-[37rem] w-[37rem]">
                        <Image className="bg-fixed w-auto h-[640px] z-10 " src={mainImage} alt="nouman image" />
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default Hero