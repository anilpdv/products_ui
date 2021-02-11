import React from "react";

export default function ProductCard(props) {
  return (
    <div className="flex  bg-blue-100 w-auto h-80 p-6 m-6 rounded ">
      <img
        src={props.image}
        alt={"dfdf"}
        style={{ width: 200 }}
        className="rounded"
      />

      <div className="ml-8">
        <h3 className="font-bold font-sans tracking-wide mb-6">{props.name}</h3>
        <div className="flex flex-wrap items-stretch mb-8">
          <span className="flex bg-green-300 p-1 w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={"w-6 h-6"}
              style={{ color: "#FBBF24" }}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <span className="ml-2">4.2</span>
          </span>

          <p className="font-bold font-sans ml-3 text-white tracking-wide">
            #1 ranked product
          </p>
        </div>

        <div className="flex flex-wrap items-end ">
          <h2 className="font-bold font-sans text-lg"> ₹ {props.budget}</h2>
          <button className="bg-gray-900 p-3 w-100 text-white font-bold rounded ml-8">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
