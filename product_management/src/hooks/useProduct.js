import { useEffect, useState } from "react";

import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../services/ProductServices";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [errors,setErrors]=useState({});
  const [editId, setEditId] = useState(null);
  const [search,setSearch]=useState("");
  const [sortOrder,setSortOrder]=useState("");
  const [deleteProduct,setDeleteProduct]=useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Load products error:", error);
    }
  }

    // const filteredProducts=products.filter((product)=>(product.name??"").toLowerCase().includes(search.toLowerCase()))
    // .sort((a,b)=>{
    //   if(sortOrder==="low"){
    //     return Number(a.price)-Number(b.price);
    //   }
    //   if(sortOrder==="high"){
    //     return Number(b.price)-Number(a.price);
    //   }
    //   return 0;
    // })  
  
  
  // function handleSearch(e){
  //   setSearch(e.target.value);
  // }
  
  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    // Name validation
    if (name.trim() === "") {
      newErrors.name = "Product name is required";
    }

    // Category validation
    if (category.trim() === "") {
      newErrors.category = "Category is required";
    }

    // Price validation
    if (price === "") {
      newErrors.price = "Price is required";
    } else if (Number(price) < 0) {
      newErrors.price = "Price cannot be negative";
    }

    // Stock validation
    if (stock === "") {
      newErrors.stock = "Stock is required";
    } else if (Number(stock) < 0) {
      newErrors.stock = "Stock cannot be negative";
    }

    // If errors exist, stop here
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors
    setErrors({});

    // Check negative values
    // if (Number(price) < 0) {
    //   alert("Price cannot be negative");
    //   return;
    // }

    // if (Number(stock) < 0) {
    //   alert("Stock cannot be negative");
    //   return;
    // }

    const productData = {
      name:name.trim(),
      category:category.trim(),
      price: Number(price),
      stock: Number(stock),
    };

    try {
      if (editId !== null) {
        const updatedProduct = await updateProduct(
          editId,
          productData
        );

        setProducts((prev) =>
          prev.map((item) =>
            item.id === editId ? updatedProduct : item
          )
        );
      } else {
        const newProduct = await createProduct(productData);

        setProducts((prev) => [...prev, newProduct]);
      }

      resetForm();
    } catch (error) {
      console.error("Submit error:", error);
    }
  }

  function handleEdit(product) {
    setEditId(product.id);
    setName(product.name);
    setCategory(product.category);
    setPrice(product.price);
    setStock(product.stock);

    //CLear Previous errors
    setErrors({});
  }

function handleDelete(product) {
  setProductToDelete(product);
}

function cancelDelete() {
  setProductToDelete(null);
}

async function confirmDelete() {
  if (!productToDelete) {
    return;
  }

  try {
    await deleteProduct(productToDelete.id);

    setProducts((prev) =>
      prev.filter((item) => item.id !== productToDelete.id)
    );

    setProductToDelete(null);
  } catch (error) {
    console.error("Delete error:", error);
  }
}

  function resetForm() {
    setName("");
    setCategory("");
    setPrice("");
    setStock("");
    setEditId(null);
    setErrors({});
  }

  return{
    //products
    products,
    //Form
    name,
    category,
    errors,
    price,
    stock,
    editId,
    //Search/Filter
    search,
    sortOrder,
    productToDelete,
    //Functions
    handleSubmit,
    handleDelete,
    confirmDelete,
    cancelDelete,
    handleEdit,
    //Setters
    setName,
    setCategory,
    setPrice,
    setStock,
    setSearch,
    setSortOrder, 
  }
}

export default useProducts;