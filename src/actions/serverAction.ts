
"use server";

import { revalidateTag } from "next/cache";


export  const addProduct = async (e:FormData) => {
    const product = e.get('product')?.toString()
    const price = e.get('price')?.toString()

    if (!product || !price) return

    const newProduct:Product ={
      name: product,
      price: price
    };

    await fetch('https://64c1b79ffa35860baea0c348.mockapi.io/products',{
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    revalidateTag("products")


  }
