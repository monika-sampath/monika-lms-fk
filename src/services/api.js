import axios from "axios";

// Base URL of your backend
const API = axios.create({ baseURL: "https://monika-lms-bk.onrender.com/api" });

// Add Authorization token for protected routes
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const registerUser = (userData) => API.post("/auth/register", userData);
export const loginUser = (userData) => API.post("/auth/login", userData);

// code to get profile details
export const profileDetail = (userData) => API.get("/profile", userData);


// export const getTutors = () => API.get("/tutors");
export const scheduleLesson = (lessonData) =>
  API.post("/lessons/schedule", lessonData);

// Fetch tutors
export const getTutors = async () => {
  const baseURL = "https://monika-lms-bk.onrender.com/api";
  try {
    const response = await axios.get(`${baseURL}/tutors`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    console.log("api.js",response);
    return response.data;
  } catch (error) {
    console.error("Error fetching tutors:", error);
    throw error;
  }
};
