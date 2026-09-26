import ProductForm from "../components/productForm";
import ProductList from "../components/ProductList";
import useProducts from "../hooks/useProduct";
import DeleteModal from "../components/DeleteModal";
import "./Products.css";

function Products() {
  const {
    products,
    name,
    category,
    price,
    stock,
    editId,
    errors,
    search,
    sortOrder,
    productToDelete,
    confirmDelete,
    cancelDelete,
    handleSubmit,
    handleDelete,
    handleEdit,
    setName,
    setSortOrder,
    setCategory,
    setPrice,
    setStock,
    setSearch,
  } = useProducts();

  // console.log("search: ", search);
  return (
    <div className="products-page">
      <header className="page-header">
        <div>
          <h1>Product Management</h1>
          <p>Manage your products, inventory and pricing</p>
        </div>

        <div className="product-count">
          <span>Total Products</span>
          <strong>{products.length}</strong>
        </div>
      </header>
      <section className="product-form-card">
        <ProductForm
          name={name}
          category={category}
          price={price}
          stock={stock}
          editId={editId}
          errors={errors}
          setName={setName}
          setCategory={setCategory}
          search={search}
          setSearch={setSearch}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          setPrice={setPrice}
          setStock={setStock}
          onSubmit={handleSubmit}
        />
      </section>
      {/* <ProductForm
        name={name}
        category={category}
        price={price}
        stock={stock}
        editId={editId}
        errors={errors}
        setName={setName}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        setPrice={setPrice}
        setStock={setStock}
        onSubmit={handleSubmit}
      /> */}
      <section className="product-list-card">
        <ProductList
          search={search}
          sortOrder={sortOrder}
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </section>

      <DeleteModal
        product={productToDelete}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />

      {/* <ProductList
        search={search}
        sortOrder={sortOrder}
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      /> */}
    </div>
  );
}

export default Products;
