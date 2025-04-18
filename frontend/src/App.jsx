import { Routes, Route } from "react-router-dom"
import { Login, Signup } from "./components";
import { Dashboard, Home} from "./containers";
import { useAuth } from "../contexts/AuthContext";



const App = () => {

  const { isAuthenticated } = useAuth();

  return (
    <div>
        {/* <RedirectToDashboard /> */}
      <Routes>
        {!isAuthenticated ? 
          <>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/sign-up" element={<Signup />} />
            <Route exact path="/log-in" element={<Login />} />
          </>
        :
          <>
            <Route exact path={`${isAuthenticated ? '/*' : "/dashboard/*"}`} element={<Dashboard />} />
          </>
        }

        {
          isAuthenticated && <Route exact path={`${isAuthenticated ? '/*' : "/dashboard/*"}`} element={<Dashboard />} />
        }
      
      </Routes>
    </div>
  );
}

export default App;