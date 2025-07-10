import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrums = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto my-8 font-[Poppins] px-4">
      <h1 className="text-base md:text-lg font-medium text-[#C5C6C7]">
        <span
          className="cursor-pointer text-[#86C232] hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </span>{" "}
        /{" "}
        <span
          className="cursor-pointer text-[#86C232] hover:underline"
          onClick={() => navigate("/products")}
        >
          Products
        </span>{" "}
        / <span className="text-white font-semibold">{title}</span>
      </h1>
    </div>
  );
};

export default Breadcrums;
