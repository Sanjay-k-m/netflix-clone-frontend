import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/home/HomePage"
import SignUpPage from "./pages/SignUpPage"
import Footer from "./components/Footer"
import { useAuthStore } from "./store/authUser"
import { Loader } from "lucide-react"

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore()
  console.log("Auth User Is : ", user);

  useEffect(() => {
    authCheck()
  }, [authCheck])

  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 size-10" />
        </div>
      </div>
    )
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
        <Route path="/signup" element={!user ? <SignUpPage /> : <Navigate to={"/"} />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  )
}

export default App
