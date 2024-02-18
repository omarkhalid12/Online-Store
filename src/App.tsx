import { ChangeEvent, FormEvent, useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/UI/Modal"
import { colors, formInputsList, productList } from "./data"
import Button from "./components/UI/Button"
import Input from "./components/UI/Input"
import { IProduct } from "./Interfaces"
import { productValidation } from "./validation"
import ErrorMessage from "./components/ErrorMessage"
import CircleColor from "./components/CircleColor"
import { v4 as uuid } from "uuid";


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
  const [products, setProducts] = useState<IProduct[]>(productList)
  const [product, setProduct] = useState<IProduct>(defaultProductObj)
  const [tempColors, setTempColors] = useState<string[]>([])
  const [errors, setErrors] = useState({title: "", description: "", imageURL: "", price: ""})
  const [isOpen, setIsOpen] = useState(false)
  console.log(tempColors);
  

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
    
    setProducts(prev => [{...product, id: uuid(), colors: tempColors}, ...prev]);
    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
    
  }
  /* _______ RENDER ________*/
  const renderProductList = products.map(product => <ProductCard key={product.id} product={product}/>)
  const renderFormInputsList =formInputsList.map(input => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id} className="mb-[3px] text-sm font-medium text-gray-700">{input.label} :</label>
      <Input type={input.type} id={input.id} name={input.name} 
      value= {product[input.name]} onChange={onChangeHandler} />
      <ErrorMessage msg={errors[input.name]}/>
    </div>
  ))
  const renderProductColors = colors.map(color => 
  <CircleColor key={color} color={color} onClick={()=> {
    if(tempColors.includes(color)) {
      setTempColors(prev => prev.filter(item => item !== color))
      return;
    }
    setTempColors(prev => [...prev, color])
  }}/>)

  return (
    <main className="container">

      <Button className="block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10 px-10 font-medium"
        width="w-fit"
        onClick={openModal}>
        Build Product
      </Button>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 gap-2 md:gap-4 rounded-md">
        {renderProductList}
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputsList}
          <div className="flex flex-wrap items-center my-4 space-x-1">
            {renderProductColors}
          </div>
          <div className="flex flex-wrap items-center my-4 space-x-1">
            {tempColors.map(color => (
              <span key={color} className="p-1 mr-1 mb-1 text-xs rounded-md text-white" style={{backgroundColor: color}}>
                {color}
              </span>
            ))}
          </div>
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