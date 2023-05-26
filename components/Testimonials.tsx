import Image from "next/image";

const Testimonials = () => {
    return (
        <div className="bg-gray-300 pt-12 px-36 pb-36">
            <p className="text-6xl font-bold mb-5">Best in <br />its class</p>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-100 rounded-2xl px-2 flex items-center justify-center">
                    <div className="my-56">
                        <div className="flex items-center justify-center">
                            <Image src="/images/gizmodo.png" alt="gizmodo" width={150} height={150} className="mb-2"/>
                        </div>
                        <p className="font-bold text-center">"Best smartphone camera"</p>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-2xl px-2 flex items-center justify-center">
                    <div  className="my-56">
                        <div className="flex items-center justify-center">
                            <Image src="/images/cnn-underscored.png" alt="cnn-underscored" width={250} height={250} className="mb-2"/>
                        </div>
                        <p className="font-bold text-center">"The best phones you can get for the money"</p>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-2xl px-2 flex items-center justify-center">
                    <div  className="my-56">
                        <div className="flex items-center justify-center">
                            <Image src="/images/mkbhd.png" alt="mkbhd" width={250} height={250} className="mb-2"/>
                        </div>
                        <p className="font-bold text-center">"Phone of the year"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials