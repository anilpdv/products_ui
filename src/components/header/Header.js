import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { fetchProductsByFilter } from "../../actions/productAction";
import {
  genderOptions,
  getAgeOptions,
  getItemOptions,
  getPriceOptions,
} from "../utils/helper";

export default function Header() {
  const [stateGender, setGenderState] = React.useState("");
  const [stateItem, setItemState] = React.useState("");
  const [statePrice, setPriceState] = React.useState("");
  const [stateAge, setAgeState] = React.useState("");
  const [itemOptions, setItemOptions] = React.useState([]);
  const [priceOptions, setPriceOptions] = React.useState([]);
  const [ageOptions, setAgeOptions] = React.useState([]);
  const [prorductsList, setProductsList] = React.useState([]);

  const dispatch = useDispatch();
  const { products, filterProducts } = useSelector((store) => store.products);
  console.log(filterProducts, "dfd");
  React.useEffect(() => {
    let ageOptions = getAgeOptions();
    setAgeOptions(ageOptions);
    getProductsList();
  }, [products]);

  const getProductsList = async () => {
    let priceRangeOptions = getPriceOptions(filterProducts);
    let itemOptions = getItemOptions(filterProducts);
    setItemOptions(itemOptions);
    setPriceOptions(priceRangeOptions);
    return;
  };

  const handleSearch = (event) => {
    event.preventDefault();
    let [budget_min, budget_max] = statePrice.value.split("-");
    let params = `?age=${stateAge.value}&gender=${
      stateGender.value
    }&budget_min=${budget_min.trim()}&budget_max=${budget_max.trim()}&category=${
      stateItem.value
    }`;
    dispatch(fetchProductsByFilter(params));
  };

  const handleGenderChange = (selectedOption) => {
    setGenderState(selectedOption);
  };

  const handlePriceChange = (selectedOption) => {
    setPriceState(selectedOption);
  };

  const handleItemChange = (selectedOption) => {
    setItemState(selectedOption);
  };

  const handleAgeChange = (selectedOption) => {
    setAgeState(selectedOption);
  };
  return (
    <div className="flex  items-center bg-yellow-300 p-6">
      <div className="flex flex-wrap justify-between   w-2/3">
        <div className="w-48">
          <p className="font-bold ml-1">Gender</p>
          <Select
            value={stateGender}
            onChange={handleGenderChange}
            options={genderOptions}
          />
        </div>
        <div className="w-48">
          <p className="font-bold ml-1">Options</p>
          <Select
            value={stateItem}
            onChange={handleItemChange}
            options={itemOptions}
          />
        </div>
        <div className="w-48">
          <p className="font-bold ml-1">Price-range</p>
          <Select
            value={statePrice}
            onChange={handlePriceChange}
            options={priceOptions}
          />
        </div>

        <div className="w-48">
          <p className="font-bold ml-1">Age</p>
          <Select
            value={stateAge}
            onChange={handleAgeChange}
            options={ageOptions}
          />
        </div>
      </div>
      <div className="flex bg-gray-900 rounded px-4 h-10 ml-64 mt-3">
        <button
          className="bg-gray-900 text-white font-bold rounded "
          onClick={handleSearch}
        >
          Search
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 text-white ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}
