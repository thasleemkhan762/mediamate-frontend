import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001/auth",
});

// export const googleAuth = (code) => api.get(`/google?code=${code}`);

// Google Login API request
export const googleLoginAuth = async (code) => {
    try {
        const response = await api.get(`/google/login?code=${code}`);
        return response.data;
    } catch (error) {
        console.error("Error during Google login:", error);
        throw error; // Re-throw error to handle it where this function is called
    }
};

// Google Signup API request
export const googleSignupAuth = async (code) => {
    try {
        const response = await api.get(`/google/signup?code=${code}`);
        return response.data;
    } catch (error) {
        console.error("Error during Google signup:", error);
        throw error; // Re-throw error to handle it where this function is called
    }
};