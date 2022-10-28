import AppLayout from '@/components/Layouts/AppLayout'
import { useApp } from '@/hooks/app'
import Head from 'next/head'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Dashboard = () => {
    let [categories, setCategories] = useState([])

    useEffect(() => {
        axios
            .get("/api/categories")
            .then((response) => {
                setCategories(response.data.data);  
                console.log(response.data.data)                         
            })
            .catch((error) => console.error(error));
    }, []);

    const imgLoader=({src, width})=>{
        return `${src}?w=${width}`;
      }

      
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>KeenEye - Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        {categories.map((category, index) => (
                                <div key={index}>
                                    <div>                                                                               
                                       <h6 className="text-xl text-orange-500 font-bold dark:text-white mb-4">{category.name}</h6>
                                       <div class=" grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4 mb-10">
                                        {category['products'].map((product, index2) => (
                                                <div key={index2}>
                                                    
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

                                                </div>
                                            ))}
                                         </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>

                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard