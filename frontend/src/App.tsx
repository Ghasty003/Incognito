import { Navigate, Route, Routes } from "react-router-dom"
import { useContext } from "react";
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Dashboard from "./pages/Dashboard"
import AuthContext from "./contexts/AuthContext";
import SendMessage from "./pages/SendMessage";


function App() {

  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={!user ? <Home /> : <Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
      <Route path="/send/:id" element={<SendMessage />} />
    </Routes>
  )
}

export default App
