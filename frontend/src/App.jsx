import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login, Signup } from "./components";
import { Dashboard, Home } from "./containers";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-up" element={<Signup />} />
        <Route exact path="/log-in" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;