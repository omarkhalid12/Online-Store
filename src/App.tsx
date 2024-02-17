import { ChangeEvent, FormEvent, useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/UI/Modal"
import { formInputsList, productList } from "./data"
import Button from "./components/UI/Button"
import Input from "./components/UI/Input"
import { IProduct } from "./Interfaces"
import { productValidation } from "./validation"
import ErrorMessage from "./components/Errors/ErrorMessage"

const App = () => {

  const defaultProductObj = {
    title : '',
    description : '',
    imageURL : '',
    price : '',
    colors : [],
    category : {
      name : '',
      imageURL : ''
    }
  }
  /* _______ STATE ________*/
  const [product, setProduct] = useState<IProduct>(defaultProductObj)
  const [errors, setErrors] = useState({title: "", description: "", imageURL: "", price: ""})
  const [isOpen, setIsOpen] = useState(false)

  /* _______ HANDLER ________*/
  const closeModal = ()=> {setIsOpen(false)}
  const openModal = ()=> {setIsOpen(true)}
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
    const {value, name} = event.target;
    setProduct({
      ...product,
      [name]: value
    })
    setErrors({
      ...errors,
      [name]: ""
    })
  }
  const onCancel = ()=> {
    setProduct(defaultProductObj)
    closeModal()
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const {title, description, imageURL, price} = product;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });
    
    const hasErrorMsg = Object.values(errors).some(value => value === '')
    && Object.values(errors).every(value => value === '')

    if(!hasErrorMsg) {
      setErrors(errors)
      return;
    }
    console.log("SEND PRODUCT TO OUR SERVER");
    
  }
  /* _______ RENDER ________*/
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product}/>)
  const renderFormInputsList =formInputsList.map(input => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id} className="mb-[3px] text-sm font-medium text-gray-700">{input.label} :</label>
      <Input type={input.type} id={input.id} name={input.name} 
      value= {product[input.name]} onChange={onChangeHandler} />
      <ErrorMessage msg={errors[input.name]}/>
    </div>
  ))

  return (
    <main className="container">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>Add Product</Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 gap-2 md:gap-4 rounded-md">
        {renderProductList}
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputsList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
            <Button className="bg-gray-400 hover:bg-gray-500" onClick={onCancel}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </main>
  )
}

export default App