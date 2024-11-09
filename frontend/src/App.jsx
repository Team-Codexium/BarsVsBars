import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login, Signup } from "./components";
import { Dashboard, Home} from "./containers";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate } from "react-router-dom";
const RedirectToDashboard = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated]);

  return null;
};


const App = () => {
  return (
    <Router>
        <RedirectToDashboard />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-up" element={<Signup />} />
        <Route exact path="/log-in" element={<Login />} />

        <Route exact path="/dashboard/*" element={<Dashboard />} />
      
      </Routes>
    </Router>
  );
}

export default App;