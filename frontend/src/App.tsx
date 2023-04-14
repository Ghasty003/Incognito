import { Navigate, Route, Routes } from "react-router-dom"
import { useContext, Suspense, lazy } from "react";
import AuthContext from "./contexts/AuthContext";
import Home from "./pages/Home"


function App() {

  const { user } = useContext(AuthContext);

  const Dashboard = lazy(() => import("./pages/Dashboard"));
  const SendMessage = lazy(() => import("./pages/SendMessage"));
  const Register = lazy(() => import("./pages/auth/Register"));
  const Login = lazy(() => import("./pages/auth/Login"));
  
  return (
    <Routes>
      <Route index path="/" element={!user ? <Home /> : <Navigate to="/dashboard" />} />

      <Route path="/dashboard" element={user ? 
        <Suspense fallback={<h1>Loading..</h1>}>
          <Dashboard />
        </Suspense> : <Navigate to="/login" />} 
      />

      <Route path="/register" element={!user ? 
        <Suspense fallback={<h1>Loading..</h1>}>
          <Register />
        </Suspense> : <Navigate to="/dashboard" />} 
      />

      <Route path="/login" element={!user ? 
        <Suspense fallback={<h1>Loading..</h1>}>
          <Login />
        </Suspense> : <Navigate to="/dashboard" />} 
      />

      <Route path="/send" element={
        <Suspense fallback={<h1>Loading...</h1>}>
          <SendMessage />
        </Suspense>
      } />
    </Routes>
  )
}

export default App
