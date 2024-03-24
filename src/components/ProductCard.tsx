/* eslint-disable react-refresh/only-export-components */
import { IProduct } from "../Interfaces"
import { txtSlicer } from "../utils/Functions"
import CircleColor from "./CircleColor"
import Image from "./Image"
import Button from "./UI/Button"

interface IProps {
  product: IProduct
  setProductToEdit: (product: IProduct)=> void
  openEditModal: ()=> void
  index: number
  setProductToEditIndex: (value: number)=> void
  openConfirmModal: ()=> void
}
const ProductCard = ({product, setProductToEdit, openEditModal, index, setProductToEditIndex, openConfirmModal} : IProps) => {
  const{title, description, imageURL, price, colors, category} = product;

  /* _______ RENDER ________*/
  const renderProductColors = colors.map(color => 
    <CircleColor key={color} color={color} />)

  /* _______ HANDLER ________*/

  const onEdit = ()=> {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIndex(index)
  }

  const onRemove = ()=> {
    setProductToEdit(product);
    openConfirmModal()
  }

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image imageURL={imageURL} alt={"product Name"} className="rounded-md h-52 w-full lg:object-cover" />

      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{txtSlicer(description)}</p>

      <div className="flex flex-wrap items-center my-4 space-x-1">
        {!colors.length ? <p className="min-h-[20] text-red-600">Not available colors!</p> : renderProductColors}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg text-indigo-600 font-semibold">${price}.00</span>
        <div className="flex items-center space-x-2">
          <p className="text-l font-semibold">{category.name}</p>
          <Image imageURL={category.imageURL} alt={category.name} className="w-10 h-10 rounded-full object-bottom"/> 
        </div>
        
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={onEdit}>Edit</Button>
        <Button className="bg-red-700 hover:bg-red-800" onClick={onRemove}>Remove</Button>
      </div>
    </div>
  )
}

export default ProductCard