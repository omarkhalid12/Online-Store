import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/UI/Modal"
import { categories, colors, formInputsList, productList } from "./data"
import Button from "./components/UI/Button"
import Input from "./components/UI/Input"
import { IProduct } from "./Interfaces"
import { productValidation } from "./validation"
import ErrorMessage from "./components/ErrorMessage"
import CircleColor from "./components/CircleColor"
import { v4 as uuid } from "uuid";
import SelectMenu from "./components/UI/SelectMenu"
import { TProductNames } from "./types"
import toast, { Toaster } from "react-hot-toast"


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
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProductObj)
  const [productToEditIndex, setProductToEditIndex] = useState<number>(0)
  const [tempColors, setTempColors] = useState<string[]>([])
  const [errors, setErrors] = useState({title: "", description: "", imageURL: "", price: ""})
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0])  

  /* _______ HANDLER ________*/
  const closeModal = ()=> setIsOpen(false)
  const openModal = ()=> setIsOpen(true)
  const closeEditModal = ()=> setIsOpenEditModal(false)
  const openEditModal = useCallback(()=> setIsOpenEditModal(true), [])
  const closeConfirmModal = () => setIsOpenConfirmModal(false);
  const openConfirmModal = useCallback(()=> setIsOpenConfirmModal(true), [])

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
  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>)=> {
    const {value, name} = event.target;
    setProductToEdit({
      ...productToEdit,
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
  const removeProductHandler = () => {
    const filtered = products.filter(product => product.id !== productToEdit.id);
    setProducts(filtered);
    closeConfirmModal();
    toast("Product has been deleted successfully!", {
      duration: 5000,
      icon: "👏",
      style: {
        backgroundColor: "#c2344d",
        color: "white",
      },
    });
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
    
    setProducts(prev => [{...product, id: uuid(), colors: tempColors, category: selectedCategory}, ...prev]);
    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
    toast.success('Product has been added successfully!', {
      duration: 3000
    });
  }
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const {title, description, imageURL, price} = productToEdit;

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
    
    const updatedProducts = [...products]
    updatedProducts[productToEditIndex] = {...productToEdit, colors: tempColors.concat(productToEdit.colors)}
    setProducts(updatedProducts)

    setProductToEdit(defaultProductObj);
    setTempColors([]);
    closeEditModal();

    toast.success('Product has been update successfully!', {
      duration: 3000
    });
  }
  /* _______ RENDER ________*/
  const renderProductList = products.map((product, index) =>(
    <ProductCard 
      key={product.id} 
      product={product} 
      setProductToEdit={setProductToEdit} 
      openEditModal={openEditModal}
      index={index}
      setProductToEditIndex={setProductToEditIndex}
      openConfirmModal={openConfirmModal}
    />
  ));

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
    if(productToEdit.colors.includes(color)) {
      setTempColors(prev => prev.filter(item => item !== color))
      return;
    }
    setTempColors(prev => [...prev, color])
  }}/>)

  const renderProductEditWithErrorMsg = (id:string, label: string, name: TProductNames)=> {
    return(
      <div className="flex flex-col" >
        <label htmlFor={id} className="mb-[3px] text-sm font-medium text-gray-700">{label} :</label>
        <Input type={"text"} 
        id={id} name={name} 
        value= {productToEdit[name]} 
        onChange={onChangeEditHandler} />
        <ErrorMessage msg={errors[name]}/>
      </div>
    )
  }

  return (
    <>
      <main className="container">
        <Button className="block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10 px-10 font-medium"
          width="w-fit"
          onClick={openModal}>
          Build Product
        </Button>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 gap-2 md:gap-4 rounded-md">
          {renderProductList}
        </div>
        {/* ADD PRODUCT MODAL */}
        <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
          <form className="space-y-3" onSubmit={submitHandler}>
            {renderFormInputsList}
            <SelectMenu selected={selectedCategory} setSelected={setSelectedCategory} />
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
              <Button className="bg-indigo-700 hover:bg-indigo-800 p-3 ">Submit</Button>
              <Button className="bg-[#f5f5fa] hover:bg-gray-300 !text-black w-full p-3 font-medium" onClick={onCancel}>Cancel</Button>
            </div>
          </form>
        </Modal>
        {/* EDIT PRODUCT MODAL */}
        <Modal isOpen={isOpenEditModal} closeModal={closeEditModal} title="EDIT THIS PRODUCT" >
          <form className="space-y-3" onSubmit={submitEditHandler}>

          {renderProductEditWithErrorMsg('title', 'Product Title', 'title')}
          {renderProductEditWithErrorMsg('description', 'Product Description', 'description')}
          {renderProductEditWithErrorMsg('imageURL', 'Product Image URL', 'imageURL')}
          {renderProductEditWithErrorMsg('price', 'Product Price', 'price')}

          <SelectMenu selected={productToEdit.category} 
            setSelected={(value)=> setProductToEdit({...productToEdit, category: value})} />

            <div className="flex flex-wrap items-center my-4 space-x-1">
              {renderProductColors}
            </div>
            <div className="flex flex-wrap items-center my-4 space-x-1">
              {tempColors.concat(productToEdit.colors).map(color => (
                <span key={color} className="p-1 mr-1 mb-1 text-xs rounded-md text-white" style={{backgroundColor: color}}>
                  {color}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <Button className="bg-indigo-700 hover:bg-indigo-800 p-3 ">Submit</Button>
              <Button className="bg-[#f5f5fa] hover:bg-gray-300 !text-black w-full p-3 font-medium" onClick={onCancel}>Cancel</Button>
            </div>

          </form>
        </Modal>
        {/* DELETING PRODUCT CONFIRM MODAL */}
        <Modal
          isOpen={isOpenConfirmModal}
          closeModal={closeConfirmModal}
          title="Are you sure you want to remove this Product from your Store?"
          description="Deleting this product will remove it permanently from your inventory. 
          Any associated data, sales history, and other related information will also be deleted. 
          Please make sure this is the intended action."
        >
          <div className="flex items-center space-x-3">
            <Button className="bg-[#c2344d] hover:bg-red-800" onClick={removeProductHandler}>
              Yes, remove
            </Button>
            <Button type="button" className="bg-[#f5f5fa] hover:bg-gray-300 !text-black" onClick={closeConfirmModal}>
              Cancel
            </Button>
          </div>
        </Modal>
        <Toaster />
      </main>
    </>
  )
}

export default App