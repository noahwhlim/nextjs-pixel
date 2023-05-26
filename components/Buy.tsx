import Link from "next/link";

const Buy = () => {
    return (
        <div className="bg-gray-200 py-16 text-center">
            <p className="font-bold text-3xl mb-3">Pixel 7</p>
            <p className="font-semibold text-sm mb-7">From $599 or $24.96/month with 24-month financing*</p>
            <Link href="/" className="bg-blue-500 text-white py-2 px-5 rounded-full focus:shadow-outline hover:bg-blue-600">Buy</Link>
        </div>
    )
}

export default Buy;