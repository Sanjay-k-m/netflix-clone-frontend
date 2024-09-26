import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isSigningUp: false,
  isCheckingAuth: true,
  isLogingOut: false,
  isLoggingIn: false,
  signup: async (credentials) => {
    set({ isSigningUp: true });
    try {
      const response = await axios.post("/api/v1/auth/signup", credentials);
      set({ user: response.data.user, isSigningUp: false });
      toast.success("Successfully signed up!");
    } catch (error) {
      toast.error(
        error.response.data.message || "An error occurred. Please try again."
      );
      set({ isSigningUp: false, user: null });
    }
  },
  login: async (credenatials) => {
    set({ isLoggingIn: true });
    try {
      const response = await axios.post("/api/v1/auth/login", credenatials);
      set({ user: response.data.user, isLoggingIn: false });
      toast.success("Successfully logged in!");
    } catch (error) {
      set({ isLoggingIn: false, user: null });
      toast.error(
        error.response.data.message || "Login Failed. Please try again."
      );
    }
  },
  logout: async () => {
    set({ isLogingOut: true });
    try {
      await axios.post("/api/v1/auth/logout");
      set({ user: null, isLogingOut: false });
      toast.success("Successfully logged out!");
    } catch (error) {
      set({ isLogingOut: false, user: null });
      toast.error(
        error.response.data.message || "LogOut Failed. Please try again."
      );
    }
  },
  authCheck: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axios.get("/api/v1/auth/auth-check");
      set({ user: response.data.user, isCheckingAuth: false });
    } catch (error) {
      set({ isCheckingAuth: false, user: null });
      console.log(error.response.data.message);
      //   toast.error(error.response.data.message||"An error occurred. Please try again.");
    }
  },
}));
