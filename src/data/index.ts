import { v4 as uuid } from "uuid";
import { ICategory, IFormInput, IProduct } from "../Interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nominee",
    description:
    "Lorem ipsum dolor sit amat consectetur adipisicing elit. Atque reiciendis excepturi dolor vel.",
    imageURL: 
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "5000",
    colors: ["#ff0032", "#2563eb", "#ff6e31"],
    category: {
      name: "Cars",
      imageURL: 
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark, 995cc Petrol",
    description:
    "Lorem ipsum dolor sit amat consectetur adipisicing elit. Atque reiciendis excepturi dolor vel.",
    imageURL: 
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1200",
    colors: ["#a31acb", "#3c2a21", "#1f8a70", "#820000", "#ff0032"],
    category: {
      name: "Spark",
      imageURL: 
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  },
  {
    id: uuid(),
    title: "T-shirt with cute cat print",
    description:
    "Lorem ipsum dolor sit amat consectetur adipisicing elit. Atque reiciendis excepturi dolor vel.",
    imageURL: 
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "75",
    colors: ["#84d2c5", "#13005a", "#a31acb", "#1f8a70", "#a855f7", "#2563eb", "#ff0032"],
    category: {
      name: "Clothes",
      imageURL: 
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  },
  {
    id: uuid(),
    title: "Nike Shoes",
    description:
    "Lorem ipsum dolor sit amat consectetur adipisicing elit. Atque reiciendis excepturi dolor vel.",
    imageURL: 
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "350",
    colors: [
    "#a31acb", 
    "#ff6e31", 
    "#3c2a21", 
    "#cb1cbd",
    "#645cbd", 
    "#ff0032",
    "#820000", 
    "#13005a", 
    "#1f8a70", 
    "#84d2c5"
    ],
    category: {
      name: "Nike",
      imageURL: 
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  },
  {
    id: uuid(),
    title: "Casual Men Clothes",
    description:
    "Lorem ipsum dolor sit amat consectetur adipisicing elit. Atque reiciendis excepturi dolor vel.",
    imageURL: 
    "https://images.unsplash.com/photo-1441984261150-55796ff52afc?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1500",
    colors: [],
    category: {
      name: "PC Desktop",
      imageURL: 
      "https://images.unsplash.com/photo-1441984261150-55796ff52afc?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  },
  {
    id: uuid(),
    title: "Bridge on a rainy day",
    description:
    "Lorem ipsum dolor sit amat consectetur adipisicing elit. Atque reiciendis excepturi dolor vel.",
    imageURL: 
    "https://images.unsplash.com/photo-1707697781368-d4f7a152510e?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "2000",
    colors: [
      "#a31acb", 
      "#ff6e31", 
      "#3c2a21"
    ],
    category: {
      name: "rainy day",
      imageURL: 
      "https://images.unsplash.com/photo-1707697781368-d4f7a152510e?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  },
  {
    id: uuid(),
    title: "Reading Books",
    description:
    "Lorem ipsum dolor sit amat consectetur adipisicing elit. Atque reiciendis excepturi dolor vel.",
    imageURL: 
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "500",
    colors: [],
    category: {
      name: "Book",
      imageURL: 
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  },
  {
    id: uuid(),
    title: "Sport Team",
    description:
    "Lorem ipsum dolor sit amat consectetur adipisicing elit. Atque reiciendis excepturi dolor vel.",
    imageURL: 
    "https://images.unsplash.com/photo-1573056019901-7d8c83cd2c7a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "3200",
    colors: [ 
      "#ff0032",
      "#820000", 
      "#13005a", 
      "#84d2c5"
      ],
    category: {
      name: "Sports",
      imageURL: 
      "https://images.unsplash.com/photo-1573056019901-7d8c83cd2c7a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  },
]

export const formInputsList: IFormInput[] = [
  {
    id : "title",
    name : "title",
    label : "Product Title",
    type : "text",
  },
  {
    id : "description",
    name : "description",
    label : "Product Description",
    type : "text",
  },
  {
    id : "image",
    name : "imageURL",
    label : "Product Image URL",
    type : "text",
  },
  {
    id : "price",
    name : "price",
    label : "Product Price",
    type : "string",
  },
]

export const colors: string[] = [
  "#a855f7",
  "#2563eb",
  "#84d2c5",
  "#13005a",
  "#a31acb",
  "#ff6e31",
  "#3c2a21",
  "#6c4ab6",
  "#cb1c8d",
  "#000000",
  "#645cbb",
  "#1f8a70",
  "#820000",
  "#ff0032",
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: 'Nike',
    imageURL:
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: 'T-Shirt',
    imageURL:
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: 'Clothes',
    imageURL:
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: 'PC Desktop',
    imageURL:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: 'Nike Shoes',
    imageURL:
    "https://images.unsplash.com/photo-1441984261150-55796ff52afc?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: 'Furniture',
    imageURL:
    "https://images.unsplash.com/photo-1441984261150-55796ff52afc?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: 'Cars',
    imageURL:
    "https://images.unsplash.com/photo-1441984261150-55796ff52afc?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: 'Camera',
    imageURL:
    "https://images.unsplash.com/photo-1441984261150-55796ff52afc?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

]