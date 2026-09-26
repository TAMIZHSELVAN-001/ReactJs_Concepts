import { Search } from "lucide-react";
import "./ProductForm.css";
function ProductForm({
  name,
  category,
  price,
  stock,
  errors,
  editId,
  search,
  sortOrder,
  setSearch,
  setSortOrder,
  setName,
  setCategory,
  setPrice,
  setStock,
  onSubmit,
}) {
  // console.log("sortOrder:", sortOrder);
  // console.log("setSortOrder:", setSortOrder);
  // console.log("type:", typeof setSortOrder);
  // console.log("Selected sort:", sortOrder);
  return (
    <>
      <div className="toolbar">
        <div className="search-box">
          <Search className="search-icon" size={18}/>
          <input
          className="search-input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
        />
        </div>
        {/* <input
          className="search-input"
          type="text"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
        /> */}
        <select
          className="sort-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Price:Low to High</option>
          <option value="high">Price:High to Low</option>
        </select>
      </div>
      <br />
      <form className="product-form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {errors.category && <p>{errors.category}</p>}
        </div>

        <div className="form-group">
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <p>{errors.price}</p>}
        </div>

        <div className="form-group">
          <input
            type="number"
            placeholder="Enter stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          {errors.stock && <p>{errors.stock}</p>}
        </div>

        <button className="submit-btn" type="submit">
          {editId !== null ? "Update Product" : "Add Product"}
        </button>
        <hr />
      </form>
    </>
  );
}

export default ProductForm;
