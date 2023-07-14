import Image from "next/image"
import Belowhero1 from "/public/belowhero1.webp"
import Belowhero2 from "/public/belowhero2.webp"
import Belowhero3 from "/public/belowhero3.webp"


const BelowHero = () => {
    return (
        <div className="mt-20 ">
            <div className="font-bold text-blue-600 flex justify-center">PROMOTIONS</div>
            <div className="font-bold text-3xl flex justify-center my-6">Our promotions Events</div>
            <div className="flex w-full ">
                <div className="w-3/5 ">
                    <div className="flex justify-between h-56 bg-gray-300 p-8 relative">
                        <div className="">
                            <div className="font-bold text-4xl">GET UP TO 60%</div>
                            <div className="text-2xl">For the summer season </div>
                        </div>
                        <div className="overflow-hidden absolute bottom-0 right-0">
                            <Image src={Belowhero1} alt="below img1" />
                            {/* <Image src={/belowhero1.webp} alt={below image 1} /> */}
                        </div>
                    </div>
                    <div className="bg-black text-white h-56 mt-3 px-16 py-8 flex-col items-center justify-center">
                        <div className="text-5xl font-bold flex justify-center m-4">Get 30% Off</div>
                        <div className="text-xl flex justify-center mt-2">USE PROMO CODE</div>
                        <span className="text-2xl bg-slate-800 p-2 rounded-md font-bold flex justify-center m-3">DINEWEEKENDSALE</span>
                    </div>
                </div>
                <div className="w-2/5 ml-10 flex justify-between space-x-10">
                    <div className="bg-orange-200 text-xl px-8 pt-10 relative w-72">
                        <div>Flex Sweatshirt</div>
                        <span className="line-through mr-5">$100.00</span>
                        <span className="font-bold">$75.00</span>
                        <Image className="mt-10 absolute bottom-0 left-0 " src={Belowhero2} alt="below hero2" />
                    </div>
                    <div className="bg-gray-300 text-xl px-8 pt-10 relative w-72 ">
                        <div className="mb-2">
                            <div>Flex Push Button Bomber</div>
                            <span className="line-through mr-5">$225.00</span>
                            <span className="font-bold">$190.00</span>
                        </div>
                        <div className="absolute bottom-0 left-0 ">
                            <Image className="max-h-80" src={Belowhero3} alt="below hero2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BelowHero