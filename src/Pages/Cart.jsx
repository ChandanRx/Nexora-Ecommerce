import React from "react";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { useCart } from "../context/CartContext";
import emptyCart from "../assets/empty-cart.png";
import { useUser } from '@clerk/clerk-react';

const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const navigate = useNavigate();
  const { user } = useUser();

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#3a3d41] text-[#C5C6C7] min-h-screen py-10 font-[Poppins] px-4">
      <div className="max-w-6xl mx-auto">
        {cartItem.length > 0 ? (
          <>
            <h1 className="text-3xl font-bold mb-6">My Cart ({cartItem.length})</h1>

            {/* Cart Items */}
            <div className="space-y-4">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#101820] border border-[#86C232] p-4 rounded-lg flex flex-col md:flex-row items-center justify-between"
                >
                  <div className="flex items-center gap-4 w-full md:w-2/3">
                    {item?.images?.[0] && (
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                    )}
                    {item?.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                    )}
                    <div>
                      <h2 className="text-sm font-semibold line-clamp-2">{item.title}</h2>
                      <p className="text-[#b7ff53] text-lg font-semibold">₹{item.price}</p>
                    </div>
                  </div>

                  {/* Quantity + Delete */}
                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <div className="bg-[#1e1e1e] border border-[#86C232] px-3 py-1 rounded-md flex items-center gap-3 text-xl">
                      <button onClick={() => updateQuantity(cartItem, item.id, "decrease")}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(cartItem, item.id, "increase")}>+</button>
                    </div>
                    <button onClick={() => deleteItem(item.id)}>
                      <i className="ri-delete-bin-line text-[#86C232] text-2xl hover:text-red-500 transition" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery & Billing Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {/* Delivery Form */}
              <div className="bg-[#101820] border border-[#86C232] p-6 rounded-lg space-y-4">
                <h2 className="text-xl font-bold text-[#86C232]">Delivery Info</h2>
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    defaultValue={user?.fullName}
                    className="w-full mt-1 p-2 bg-[#1e1e1e] text-white rounded-md border border-[#86C232]/40"
                  />
                </div>
                <div>
                  <label>Address</label>
                  <input
                    type="text"
                    defaultValue={location?.country}
                    className="w-full mt-1 p-2 bg-[#1e1e1e] text-white rounded-md border border-[#86C232]/40"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="w-full">
                    <label>State</label>
                    <input
                      type="text"
                      defaultValue={location?.state}
                      className="w-full mt-1 p-2 bg-[#1e1e1e] text-white rounded-md border border-[#86C232]/40"
                    />
                  </div>
                  <div className="w-full">
                    <label>PostCode</label>
                    <input
                      type="text"
                      defaultValue={location?.postcode}
                      className="w-full mt-1 p-2 bg-[#1e1e1e] text-white rounded-md border border-[#86C232]/40"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-full">
                    <label>Country</label>
                    <input
                      type="text"
                      defaultValue={location?.country}
                      className="w-full mt-1 p-2 bg-[#1e1e1e] text-white rounded-md border border-[#86C232]/40"
                    />
                  </div>
                  <div className="w-full">
                    <label>Phone No</label>
                    <input
                      type="text"
                      defaultValue="+91 9999999999"
                      className="w-full mt-1 p-2 bg-[#1e1e1e] text-white rounded-md border border-[#86C232]/40"
                    />
                  </div>
                </div>
                <button className="bg-gradient-to-r from-lime-400 to-purple-500 text-[#222629] font-semibold px-4 py-2 rounded w-full hover:scale-105 transition">
                  Submit
                </button>
                <div className="text-center text-sm text-gray-400 my-2">OR</div>
                <button
                  onClick={getLocation}
                  className="bg-gradient-to-r from-lime-400 to-purple-500 text-[#222629] font-semibold px-4 py-2 rounded w-full hover:scale-105 transition"
                >
                  Detect Location
                </button>
              </div>

              {/* Billing Summary */}
              <div className="bg-[#101820] border border-[#86C232] p-6 rounded-lg space-y-4">
                <h2 className="text-xl font-bold text-[#86C232]">Bill Details</h2>

                <div className="flex justify-between">
                  <span className="flex items-center gap-2">
                    <i className="ri-file-list-line" /> Items Total
                  </span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex items-center gap-2">
                    <i className="ri-truck-line" /> Delivery Charge
                  </span>
                  <span className="text-[#b7ff53] font-semibold">
                    <span className="line-through text-gray-500">₹25</span> FREE
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="flex items-center gap-2">
                    <i className="ri-hand-coin-line" /> Handling Charge
                  </span>
                  <span className="text-[#b7ff53] font-semibold">₹5</span>
                </div>

                <hr className="border-gray-700" />

                <div className="flex justify-between font-bold text-lg">
                  <span>Grand Total</span>
                  <span>₹{(totalPrice + 5).toFixed(2)}</span>
                </div>

                <div>
                  <h3 className="font-semibold text-sm mb-1">Apply Promo Code</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="w-full p-2 rounded-md bg-[#1e1e1e] text-white border border-[#86C232]/40"
                    />
                    <button className="bg-white text-black px-4 py-2 rounded-md hover:opacity-80 transition">
                      Apply
                    </button>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-lime-400 to-purple-500 text-[#222629] font-bold px-4 py-2 rounded w-full hover:scale-105 transition mt-4">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-[600px] gap-6">
            <h1 className="text-4xl font-bold text-[#b7ff53]">Oh no! Your cart is empty</h1>
            <img src={emptyCart} alt="Empty Cart" className="w-[300px]" />
            <button
              onClick={() => navigate("/product")}
              className="bg-gradient-to-r from-lime-400 to-purple-500 text-[#222629] font-semibold px-4 py-2 rounded hover:scale-105 transition"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
