import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/home/HomePage"
import SignUpPage from "./pages/SignUpPage"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
