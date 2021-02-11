import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from "../../actions/productAction";
import { getAllProducts } from "../../services";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchProductsList());
  }, []);

  return (
    <div className="grid grid-cols-2 m-10">
      {products ? "" : "loading.."}
      {products && products.map((product) => <ProductCard {...product} />)}
    </div>
  );
}
