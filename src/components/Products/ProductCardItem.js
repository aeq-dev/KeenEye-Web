import Link from "next/link"
import Image from 'next/image'

const ProductCardItem = ({ imgLoader, product }) => (
    <div className="hover:bg-gray-200 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <Link href="/dashboard">
        <a href="#">
            <Image loader={imgLoader} src={product.image} width={300} height={200} className="rounded-t-lg" alt=""/>
        </a>
    </Link>
    <div className="p-5">
        <Link href="/dashboard">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
            </a>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">
            Price: {product.price}
        </p>
        <Link href="/dashboard">
            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add To Cart                                                         
            </a>
        </Link>
    </div>
</div>
)

export default ProductCardItem
