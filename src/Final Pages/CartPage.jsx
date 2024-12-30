// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const CartPage = ({ cart, updateCart }) => {
//   const navigate = useNavigate();

//   const handleQuantityChange = (id, delta) => {
//     updateCart(id, delta);
//   };

//   const calculateSubtotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const handleCheckout = () => {
//     navigate("/payment", { state: { total: calculateSubtotal() } });
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//         Your Cart
//       </h1>
//       {cart.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <div className="max-w-4xl mx-auto">
//           {cart.map((item) => (
//             <div
//               key={item._id}
//               className="flex justify-between items-center p-4 bg-white shadow rounded-lg mb-4"
//             >
//               <div>
//                 <h2 className="text-lg font-bold">{item.course_name}</h2>
//                 <p className="text-sm text-gray-600">${item.price}</p>
//               </div>
//               <div className="flex items-center">
//                 <button
//                   className="px-3 py-1 bg-gray-200 rounded"
//                   onClick={() => handleQuantityChange(item._id, -1)}
//                   disabled={item.quantity <= 1}
//                 >
//                   -
//                 </button>
//                 <span className="mx-3">{item.quantity}</span>
//                 <button
//                   className="px-3 py-1 bg-gray-200 rounded"
//                   onClick={() => handleQuantityChange(item._id, 1)}
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="text-lg font-bold">${item.price * item.quantity}</p>
//             </div>
//           ))}
//           <div className="text-right mt-6">
//             <h2 className="text-2xl font-bold">
//               Subtotal: ${calculateSubtotal()}
//             </h2>
//             <button
//               className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//               onClick={handleCheckout}
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       )}
//       <Link to="/studentDashboard/coursesDashboard">Continue Shoping...</Link>
//     </div>
//   );
// };

// export default CartPage;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart, updateCart }) => {
  const navigate = useNavigate();

  const handleQuantityChange = (id, delta) => {
    updateCart(id, delta);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    const purchasedCourseIds = cart.map((item) => item._id); // Get all course IDs
    navigate("/payment", {
      state: {
        total: calculateSubtotal(),
        courseIds: purchasedCourseIds,
      },
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center p-4 bg-white shadow rounded-lg mb-4"
            >
              <div>
                <h2 className="text-lg font-bold">{item.course_name}</h2>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="px-3 py-1 bg-gray-200 rounded"
                  onClick={() => handleQuantityChange(item._id, -1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="mx-3">{item.quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded"
                  onClick={() => handleQuantityChange(item._id, 1)}
                >
                  +
                </button>
              </div>
              <p className="text-lg font-bold">${item.price * item.quantity}</p>
            </div>
          ))}
          <div className="text-right mt-6">
            <h2 className="text-2xl font-bold">
              Subtotal: ${calculateSubtotal()}
            </h2>
            <button
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      <Link to="/studentDashboard/coursesDashboard">Continue Shoping...</Link>
    </div>
  );
};

export default CartPage;
