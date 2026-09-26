import { useEffect, useRef, useState } from "react";

function ProductSearch() {
  const [search, setSearch] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      console.log("API call:", search);
    }, 500);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [search]);

  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search products"
    />
  );
}

export default ProductSearch;