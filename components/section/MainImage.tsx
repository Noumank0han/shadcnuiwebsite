import Image from "next/image"

const MainImage = () => {
    return (
        <div className="mr-20">
            <Image className="mr-64 bg-fixed relative z-10" width={500} height={100} src="/nouman.png" alt="nouman image" />
            <div className="right-7 bg-[#969F95] absolute top-48 z-0 rounded-full h-[30rem] w-[30rem]">
            </div>
        </div>
    )
}

export default MainImage