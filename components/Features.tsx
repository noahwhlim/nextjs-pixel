import Image from "next/image";

const Features = () => {
    return (
        <div className="bg-gray-300 px-36 pt-12 pb-6">
            <div className="grid grid-cols-2 grid-rows-2 gap-6">
                <div className="col-span-1 row-span-2 bg-gray-100 rounded-2xl text-center pt-8 font-bold space-y-2">
                    <p className="text-4xl text-blue-500">Meet</p>
                    <p className="text-4xl text-blue-500">6.3 Inches</p>
                    <div className="flex justify-center align-middle">
                        <Image src="/images/black-double.png" alt="black-double" width={500} height={500}/>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 bg-gray-100 rounded-2xl text-center pt-8 font-bold space-y-2">
                    <p className="text-3xl text-red-500">50 MP Rear Camera</p>
                    <p className="text-3xl text-red-500">10.8 MP Front Camera</p>
                    <div className="flex justify-center float-bottom">
                        <Image src="/images/white-camera.png" alt="white-camera" width={600} height={600}/>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 bg-gray-100 rounded-2xl text-center pt-8 font-bold text-yellow-500">
                    <p className="text-3xl">IP68 Water Resistence</p>
                    <p className="text-3xl">Gorilla Glass<span className="text-black">®</span> Victus<span className="text-black">™</span></p>
                    <div className="flex justify-center">
                        <Image src="/images/white-wet.png" alt="white-wet" width={600} height={500}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;