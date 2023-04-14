import { Navigate, Route, Routes } from "react-router-dom"
import { useContext, Suspense, lazy } from "react";
import AuthContext from "./contexts/AuthContext";
import Home from "./pages/Home"
import Loading from "./components/Loading";


function App() {

  const { user } = useContext(AuthContext);

  const Dashboard = lazy(() => import("./pages/Dashboard"));
  const SendMessage = lazy(() => import("./pages/SendMessage"));
  const Register = lazy(() => import("./pages/auth/Register"));
  const Login = lazy(() => import("./pages/auth/Login"));
  
  return (
    <Routes>
      <Route index path="/" element={!user ? <Home /> : <Navigate to="/dashboard" />} />

      <Route path="/dashboard" element={ 
        <Suspense fallback={<Loading />}>
         {user ? <Dashboard /> : <Navigate to="/login" />}
        </Suspense> } 
      />

      <Route path="/register" element={
        <Suspense fallback={<Loading />}>
          {!user ? <Register /> : <Navigate to="/dashboard" />}
        </Suspense> } 
      />

      <Route path="/login" element={ 
        <Suspense fallback={<Loading />}>
          {!user ? <Login /> : <Navigate to="/dashboard" />}
        </Suspense> } 
      />

      <Route path="/send" element={
        <Suspense fallback={<Loading />}>
          <SendMessage />
        </Suspense>
      } />
    </Routes>
  )
}

export default App
