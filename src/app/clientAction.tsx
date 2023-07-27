"use client"

import { addProduct } from "@/actions/serverAction"
import { useTransition } from "react"



 export default function AddProductButton(){
    const [isPending, startTransition ]=useTransition()

    const formData = new FormData()
    formData.append('product', 'Macbook')
    formData.append('price', '90')
    
    return( 
        <div className="flex flex-col items-center my-5">
            <h1 className="text-3xl font-bold text-center">Products Adding by Client Server Action</h1>
            <button 
                onClick={()=> startTransition(()=> addProduct(formData) )} 
                className="bg-orange-200 mt-6 p-5 text-black ">
                {isPending ? 'Adding...' : 'Add Product'}
            </button>
        </div>
    )
}