import { addProduct } from "@/actions/serverAction";
import AddProductButton from "./clientAction";



export default async function Home() {

  const products:Product[] = await fetch('https://64c1b79ffa35860baea0c348.mockapi.io/products',{
    cache: 'no-cache',
    next: {tags:["products"]}
  }).then(res => res.json())


  return (
    <div>

      <div className="m-9 w-full ">
      <h1 className="text-3xl font-bold text-center">Products</h1>
      <form action={addProduct} className="flex flex-col justify-center items-center w-[40%] m-auto" >
        <input type="text" name="product" placeholder="product" className="border mt-2  border-gray-400 text-black p-2 rounded w-full " />
        <input type="text" name="price" placeholder="price" className="border mt-2 border-gray-400 p-2 text-black rounded w-full"  />
        <button type="submit" className="p-2 bg-orange-400 mt-2 w-full">Submit</button>
      </form>
      </div>

      <div className="grid grid-cols-4 gap-4 w-[80%] m-auto">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-400 p-2 rounded">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
          <AddProductButton />
    </div>
  )
}
