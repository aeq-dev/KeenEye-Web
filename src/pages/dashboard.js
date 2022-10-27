import AppLayout from '@/components/Layouts/AppLayout'
import { useApp } from '@/hooks/app'
import Head from 'next/head'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'

const Dashboard = () => {
    let [categories, setCategories] = useState([])

    useEffect(() => {
        axios
            .get("/api/categories")
            .then((response) => {
                setCategories(response.data.data);                           
            })
            .catch((error) => console.error(error));
    }, []);

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
                                       <span className="text-red-700"> {category.name}</span>
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