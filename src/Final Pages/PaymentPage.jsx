import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate(); // Initialize the navigate hook
  const location = useLocation();
  const total = location.state?.total || 0;
  const tutorName = location.state?.tutorName || "Unknown Tutor";
  const startDate = location.state?.date || "Not specified";
  const startTime = location.state?.time || "Not specified";
  const courseIds = location.state?.courseIds;

  const [course, setData] = useState(null); // State to hold course data
  //const [data, setData] = useState(null); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  console.log("Total:", total);
  console.log("Tutor Name:", tutorName);
  console.log("Start Date:", startDate);
  console.log("Start Time:", startTime);
  console.log("Course IDs:", courseIds);

  // Fetch course data dynamically
  useEffect(() => {
    //   const fetchCourse = async () => {
    //     try {
    //       const response = await axios.get(`/api/courses/${courseIds}`); // Replace 12345 with course ID
    //       setCourse(response.data); // Set course details in state
    //       setLoading(false);
    //     } catch (err) {
    //       console.error("Error fetching course:", err);
    //       setError("Failed to load course information.");
    //       setLoading(false);
    //     }
    //   };

    //   fetchCourse();
    // }, [courseIds]);

    const fetchData = async () => {
      try {
        let response;
        console.log("CourseIds:", courseIds);
        if (courseIds) {
          response = await axios.get(`/api/courses/${courseIds}`);
        }
        // } else {
        //   response = await axios.get(`/api/schedule/${tutorName}`);
        // }
        setData(response.data); // Set fetched data in state
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load information.");
        setLoading(false);
      }
    };

    fetchData();
  }, [courseIds]);

  //     const handlePayment = () => {
  //     alert("Payment processed successfully!");
  //   };
  const handlePayment = async () => {
    try {
      // API call to backend to create Razorpay order
      const { data } = await axios.post("/api/razorpay/create-order", {
        amount: 50000, // Amount in smallest currency unit (e.g., 50000 = ₹500)
        currency: "INR",
      });

      const { id: order_id, amount, currency } = data;

      // Load Razorpay script
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const options = {
          key: "rzp_test_K7PfU1DrMqXthw", // Replace with your Razorpay Key ID
          amount,
          currency,
          name: "LMS Course Payment",
          description: "Complete your course payment",
          order_id,
          handler: async function (response) {
            // Send the payment response to the backend for verification
            const paymentResult = await axios.post(
              "/api/razorpay/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }
            );

            if (paymentResult.data.success) {
              alert("Payment Successful! Your course has been enrolled.");
              // On successful payment, save the course details

              //   const enrolledCourse = {
              //     courseId: courseIds, // Replace with actual course ID
              //     courseTitle: course.course_name, // Replace with actual course title
              //     courseDescription: course.sub_title,
              //   };

              // // Navigate to My Learning Path page and pass the course data
              // // const scheduledClass = {
              // //   tutorName: "John Smith",
              // //   date: "2024-01-10",
              // //   time: "11:00 AM",
              // // };
              // const scheduledClass = {
              //   tutorName,
              //   date: startDate,
              //   time: startTime,
              // };

              //   // Store course data in localStorage
              //   localStorage.setItem(
              //     "enrolledCourse",
              //     JSON.stringify(enrolledCourse)
              //   );

              // // Store course data in localStorage

              // localStorage.setItem(
              //   "scheduledClass",
              //   JSON.stringify(scheduledClass)
              // );

              // Save the relevant details
              const scheduledClass = {
                tutorName,
                date: startDate,
                time: startTime,
              };
              console.log("data", course);
              const courseDetails = courseIds
                ? {
                    courseIds,
                    courseTitle: course.course_name,
                    courseDescription: course.sub_title,
                  }
                : null;

              if (courseDetails) {
                localStorage.setItem(
                  "enrolledCourse",
                  JSON.stringify(courseDetails)
                );
              } else {
                localStorage.setItem(
                  "scheduledClass",
                  JSON.stringify(scheduledClass)
                );
              }
              // Navigate to the My Learning Path page
              navigate("/studentDashboard/myLearnPath");
              // navigate("/studentDashboard/myLearnPath", {
              //   state: { enrolledCourse, scheduledClass },
              // });
              // navigate("/studentDashboard/myLearnPath");
            } else {
              alert("Payment verification failed. Please try again.");
            }
          },
          prefill: {
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      };
    } catch (error) {
      console.error("Error during payment:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Payment Page
      </h1>
      <div className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Total Bill: ${total}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter your email"
          />
        </div>
        <h3 className="text-lg font-semibold mb-4">Select Payment Method:</h3>
        <div className="space-y-4">
          <div>
            <input
              type="radio"
              id="razorpay"
              name="payment"
              className="mr-2"
              defaultChecked
            />
            <label htmlFor="razorpay" className="text-gray-700">
              Razorpay
            </label>
          </div>
          <div>
            <input type="radio" id="gpay" name="payment" className="mr-2" />
            <label htmlFor="gpay" className="text-gray-700">
              GPay
            </label>
          </div>
        </div>
        <button
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
