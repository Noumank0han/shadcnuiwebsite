import Image from "next/image"
import Belowhero1 from "/public/belowhero1.webp"
import Belowhero2 from "/public/belowhero2.webp"
import Belowhero3 from "/public/belowhero3.webp"
import Wrapper from "@/components/shared/Wrapper"


const BelowHero = () => {
    return (
        <Wrapper>
            <div className="mt-20 ">
                <div className="font-bold text-blue-600 flex justify-center text-sm">PROMOTIONS</div>
                <div className="font-bold text-4xl flex justify-center my-6 ">Our promotions Events</div>
                <div className="flex flex-col lg:flex-row w-full justify-center ">
                    <div className="lg:w-2/5 ">
                        <div className="flex justify-between h-56 bg-gray-300 p-8 relative">
                            <div className="flex flex-col justify-center lg:justify-start w-1/2">
                                <div className="font-bold text-3xl lg:text-4xl">GET UP TO 60%</div>
                                <div className="text-xl xl:text-2xl">For the summer season </div>
                            </div>
                            <div className="overflow-hidden absolute bottom-0 right-0 lg:-right-8 xl:right-0">
                                <Image src={Belowhero1} alt="below img1" />
                                {/* <Image src={/belowhero1.webp} alt={below image 1} /> */}
                            </div>
                        </div>
                        <div className="bg-black text-white h-56 mt-3 px-14 lg:px-10 py-8 flex-col items-center justify-center">
                            <div className="text-4xl xl:text-5xl font-bold flex justify-center m-4">Get 30% Off</div>
                            <div className="text-base xl:text-xl flex justify-center mt-2">USE PROMO CODE</div>
                            <span className="text-lg xl:text-2xl tracking-widest bg-slate-800 p-2 rounded-md font-semibold xl:font-bold flex justify-center m-3">DINEWEEKENDSALE</span>
                        </div>
                    </div>
                    <div className="lg:w-3/5 lg:ml-10 flex flex-col sm:flex-row justify-between sm:space-x-4 lg:space-x-10">
                        <div className="bg-orange-200 flex flex-col text-xl px-8 pt-8 lg:pt-10 mt-3 lg:mt-0 relative lg:w-1/2">
                            <div>Flex Sweatshirt</div>
                            <div>
                                <span className="line-through mr-5">$100.00</span>
                                <span className="font-bold">$75.00</span>
                            </div>
                            <Image className="lg:mt-10 lg:absolute bottom-0 left-0 self-center " src={Belowhero2} alt="below hero2" />
                        </div>
                        <div className="bg-gray-300 flex flex-col justify-center lg:justify-start text-xl px-8 pt-8 lg:pt-10 mt-3 lg:mt-0 relative lg:w-1/2 ">
                            <div className="mb-2">
                                <div>Flex Push Button Bomber</div>
                                <span className="line-through mr-5">$225.00</span>
                                <span className="font-bold">$190.00</span>
                            </div>
                            <div className="lg:absolute flex justify-center lg:justify-normal bottom-0 left-0 ">
                                <Image className="max-h-80 " src={Belowhero3} alt="below hero2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default BelowHero