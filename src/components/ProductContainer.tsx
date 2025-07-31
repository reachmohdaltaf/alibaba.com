import ProductCard from "./ProductCard"
import mockProducts from '../json/product'
const ProductContainer = () => {
    console.log(mockProducts)
  return (
   <div className="">
    <h1 className="text-3xl font-bold p-3"></h1>
     <div className="bg-secondary rounded-md grid grid-col-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-col-1 gap-2 w-full p-4">
       
       {mockProducts.map((product, index)=>{
        return(
            <ProductCard
            key={index}
            Product={product}
            />
        )
       })}
    </div>
   </div>
  )
}

export default ProductContainer