import { IProduct } from "../Interfaces"
import { txtSlicer } from "../utils/Functions"
import Image from "./Image"
import Button from "./UI/Button"
interface IProps {
  product: IProduct
}
const ProductCard = ({product} : IProps) => {
  const{title, description, imageURL, price, category} = product
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image imageURL={imageURL} alt={"product Name"} className="rounded-md h-52 w-full lg:object-cover" />

      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>

      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"/>
      </div>

      <div className="flex items-center justify-between">
        <span>${price}.00</span>
        <Image imageURL={category.imageURL} alt={category.name} className="w-10 h-10 rounded-full object-bottom" 
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700" width="w-full">Edit</Button>
        <Button className="bg-red-700">Delete</Button>
      </div>
    </div>
  )
}

export default ProductCard