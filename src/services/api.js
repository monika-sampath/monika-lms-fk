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

const API_BASE_URL = "https://monika-lms-bk.onrender.com/api";

// Get user profile by username
export const profileDetail = async (username) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/users/${username}/profile`
    );
    return response.data.profile;
    console.log("get profile information", response.data);
  } catch (error) {
    console.error("Error fetching profile:", error.response?.data || error);
    throw error;
  }
};

// Update user profile by username
export const updateProfile = async (username, updatedData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/users/${username}/profile`,
      updatedData
    );
    return response.data.profile;
  } catch (error) {
    console.error("Error updating profile:", error.response?.data || error);
    throw error;
  }
};

// export const getTutors = () => API.get("/tutors");
export const scheduleLesson = (lessonData) =>
  API.post("/lessons/schedule", lessonData);
// Move tutors to tutor collection
export const createTutor = (userData) => API.post("/tutor", userData);

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
    console.log("api.js", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching tutors:", error);
    throw error;
  }
};

const API_BASE_URLS = "https://monika-lms-bk.onrender.com/api/courses"; // Adjust based on your backend URL

// Fetch all courses
export const getAllCourses = async () => {
  try {
    const response = await axios.get(API_BASE_URLS);
    return response.data;
    console.log("error from api:", response);
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch courses");
  }
};

// Create a new course
export const createCourse = async (courseData) => {
  try {
    const response = await axios.post(API_BASE_URLS, courseData, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating course:", error);
    throw new Error(error.response?.data?.message || "Failed to create course");
  }
};

// Update an existing course
export const updateCourse = async (courseId, courseData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URLS}/${courseId}`,
      courseData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating course:", error);
    throw new Error(error.response?.data?.message || "Failed to update course");
  }
};

// Delete a course
export const deleteCourse = async (courseId) => {
  try {
    const response = await axios.delete(`${API_BASE_URLS}/${courseId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting course:", error);
    throw new Error(error.response?.data?.message || "Failed to delete course");
  }
};
