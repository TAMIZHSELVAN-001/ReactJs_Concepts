import "./ProductList.css";

function ProductList({
  search,
  sortOrder,
  products,
  onEdit,
  onDelete,
}) {
  const filteredProducts = products
    .filter((product) =>
      (product.name ?? "")
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "low") {
        return Number(a.price) - Number(b.price);
      }

      if (sortOrder === "high") {
        return Number(b.price) - Number(a.price);
      }

      return 0;
    });

  return (
    <div>
      <div className="list-header">
        <div>
          <h2>Products</h2>
          <p>{filteredProducts.length} products found</p>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-top">
                <div className="product-icon">
                  {product.name?.charAt(0).toUpperCase()}
                </div>

                <span className="category-badge">
                  {product.category}
                </span>
              </div>

              <h3>{product.name}</h3>

              <div className="product-info">
                <div>
                  <span>Price</span>
                  <strong>₹{product.price}</strong>
                </div>

                <div>
                  <span>Stock</span>
                  <strong>{product.stock}</strong>
                </div>
              </div>

              <div className="product-actions">
                <button
                  className="edit-btn"
                  onClick={() => onEdit(product)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => onDelete(product)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No Products Found</h3>
          <p>Try changing your search.</p>
        </div>
      )}
    </div>
  );
}

export default ProductList;