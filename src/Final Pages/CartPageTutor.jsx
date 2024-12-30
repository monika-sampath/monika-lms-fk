// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// const CartPageTutor = () => {
//   const location = useLocation();
//   const { tutor } = location.state || {};

//   const [hours, setHours] = useState(1);
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");

//   const handleIncrement = () => setHours((prev) => prev + 1);
//   const handleDecrement = () => setHours((prev) => (prev > 1 ? prev - 1 : 1));

//   const handleSchedule = () => {
//     if (!date || !time) {
//       alert("Please select a date and time for the class.");
//       return;
//     }

//     const selectedDate = new Date(date);
//     const today = new Date();
//     today.setHours(0, 0, 0, 0); // Ensure the current day comparison ignores time.

//     if (selectedDate < today) {
//       alert("Please select a future date.");
//       return;
//     }

//     const [hour, minute] = time.split(":").map(Number);
//     if (hour < 10 || hour >= 19) {
//       alert("Please select a time between 10:00 AM and 7:00 PM.");
//       return;
//     }

//     alert(
//       `Class Scheduled:\nTutor: ${
//         tutor.name
//       }\nDate: ${date}\nTime: ${time}\nHours: ${hours}\nTotal: $${
//         tutor.hourlyRate * hours
//       }`
//     );
//   };

//   if (!tutor) {
//     return <div className="p-4">No tutor selected</div>;
//   }

//   const totalAmount = tutor.hourlyRate * hours;

//   return (
//     <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded">
//       <h2 className="text-xl font-bold mb-4">Cart</h2>
//       <div className="mb-4">
//         <p className="text-sm font-medium">Tutor Name: {tutor.name}</p>
//         <p className="text-sm font-medium">Hourly Rate: ${tutor.hourlyRate}</p>
//       </div>
//       <div className="flex items-center mb-4">
//         <button
//           className="px-4 py-2 bg-gray-200 rounded-l"
//           onClick={handleDecrement}
//         >
//           -
//         </button>
//         <span className="px-4 py-2 bg-gray-100">{hours}</span>
//         <button
//           className="px-4 py-2 bg-gray-200 rounded-r"
//           onClick={handleIncrement}
//         >
//           +
//         </button>
//       </div>
//       <div className="text-lg font-semibold mb-4">Total: ${totalAmount}</div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-2">
//           Select Date:
//         </label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           min={new Date().toISOString().split("T")[0]} // Restrict to future dates
//           className="w-full px-3 py-2 border border-gray-300 rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-2">
//           Select Time:
//         </label>
//         <input
//           type="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           className="w-full px-3 py-2 border border-gray-300 rounded"
//         />
//       </div>
//       <button
//         onClick={handleSchedule}
//         className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//       >
//         Schedule Class
//       </button>
//     </div>
//   );
// };

// export default CartPageTutor;

// final

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const CartPageTutor = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { tutor } = location.state || {};

//   const [hours, setHours] = useState(1);
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");

//   const handleIncrement = () => setHours((prev) => prev + 1);
//   const handleDecrement = () => setHours((prev) => (prev > 1 ? prev - 1 : 1));

//   const handleSchedule = () => {
//     if (!date || !time) {
//       alert("Please select a date and time for the class.");
//       return;
//     }

//     const selectedDate = new Date(date);
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     if (selectedDate < today) {
//       alert("Please select a future date.");
//       return;
//     }

//     const [hour] = time.split(":").map(Number);
//     if (hour < 10 || hour >= 19) {
//       alert("Please select a time between 10:00 AM and 7:00 PM.");
//       return;
//     }

//     // Navigate to PaymentPage with necessary data
//     const totalAmount = tutor ? tutor.hourlyRate * hours : 0;
//     navigate("/payment", {
//       state: {
//         total: totalAmount,
//         date,
//         time,
//       },
//     });
//   };

//   if (!tutor) {
//     return <div className="p-4">No tutor selected</div>;
//   }

//   const totalAmount = tutor.hourlyRate * hours;

//   return (
//     <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded">
//       <h2 className="text-xl font-bold mb-4">Cart</h2>
//       <div className="mb-4">
//         <p className="text-sm font-medium">Tutor Name: {tutor.name}</p>
//         <p className="text-sm font-medium">Hourly Rate: ${tutor.hourlyRate}</p>
//       </div>
//       <div className="flex items-center mb-4">
//         <button
//           className="px-4 py-2 bg-gray-200 rounded-l"
//           onClick={handleDecrement}
//         >
//           -
//         </button>
//         <span className="px-4 py-2 bg-gray-100">{hours}</span>
//         <button
//           className="px-4 py-2 bg-gray-200 rounded-r"
//           onClick={handleIncrement}
//         >
//           +
//         </button>
//       </div>
//       <div className="text-lg font-semibold mb-4">Total: ${totalAmount}</div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-2">
//           Select Date:
//         </label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           min={new Date().toISOString().split("T")[0]} // Restrict to future dates
//           className="w-full px-3 py-2 border border-gray-300 rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-2">
//           Select Time:
//         </label>
//         <input
//           type="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           className="w-full px-3 py-2 border border-gray-300 rounded"
//         />
//       </div>
//       <button
//         onClick={handleSchedule}
//         className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//       >
//         Schedule Class
//       </button>
//     </div>
//   );
// };

// export default CartPageTutor;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CartPageTutor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tutor } = location.state || {};

  const [hours, setHours] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleIncrement = () => setHours((prev) => prev + 1);
  const handleDecrement = () => setHours((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSchedule = () => {
    if (!date || !time) {
      alert("Please select a date and time for the class.");
      return;
    }

    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert("Please select a future date.");
      return;
    }

    const [hour] = time.split(":").map(Number);
    if (hour < 10 || hour >= 19) {
      alert("Please select a time between 10:00 AM and 7:00 PM.");
      return;
    }

    // Navigate to PaymentPage with necessary data
    const totalAmount = tutor ? tutor.hourlyRate * hours : 0;
    navigate("/payment", {
      state: {
        tutorName: tutor.name,
        total: totalAmount,
        date,
        time,
      },
    });
  };

  if (!tutor) {
    return <div className="p-4">No tutor selected</div>;
  }

  const totalAmount = tutor.hourlyRate * hours;

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      <div className="mb-4">
        <p className="text-sm font-medium">Tutor Name: {tutor.name}</p>
        <p className="text-sm font-medium">Hourly Rate: ${tutor.hourlyRate}</p>
      </div>
      <div className="flex items-center mb-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded-l"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="px-4 py-2 bg-gray-100">{hours}</span>
        <button
          className="px-4 py-2 bg-gray-200 rounded-r"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <div className="text-lg font-semibold mb-4">Total: ${totalAmount}</div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Date:
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]} // Restrict to future dates
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Time:
        </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <button
        onClick={handleSchedule}
        className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Schedule Class
      </button>
    </div>
  );
};

export default CartPageTutor;
