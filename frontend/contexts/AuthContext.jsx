import axios from "axios";
import { useEffect, useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token")? localStorage.getItem("token") : null);
    const [user, setUser] = useState([]);
    const [artists, setArtists] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");


    const  signup = async (data) => {
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:3000/api/auth/register", data, {
              withCredentials: true
            });
      
            if (response.data.success) {
                setUser(response.data.user);
                setIsAuthenticated(true);
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
            }
      
          } catch (error) {
            console.error("Error during registration: ", error.message);
            if (error.response.status === 400) {
              setErrorMessage(error.response.data.message);
            }
          } finally {
            setLoading(false);
          }
    }
    
    const login = async (data) => {
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:3000/api/auth/login", data, {
              withCredentials: true
            });
            // console.log(response)
            if (response.data.success) {
                // setUser(response.data.user);
                setIsAuthenticated(true);
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }
      
          } catch (error) {
            console.error("Error during login: ", error.message);
            if (error.response.status === 400) {
              setErrorMessage(error.response.data.message);
            }
            if (error.response.status === 401) {
              setErrorMessage(error.response.data.message);
            }
          } finally {
            setLoading(false);
          }
    }

    const getUser = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:3000/api/auth/getUser", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                withCredentials: true
            });
            if (response.data.success) {
                setUser(response.data.user);
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error("Error fetching user data: ", error.message);
        } finally {
            setLoading(false);
        }
    }


    const logout = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:3000/api/auth/logout", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                withCredentials: true
            });

            if (response.data.success) {
                setUser([]);
                setIsAuthenticated(false);
                setToken(null);
                localStorage.removeItem("token");
                navigate("/");
            }
        } catch (error) {
            console.error("Error during logout: ", error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const fetchUser = async () => {
            if (token) {
                await getUser();
            } else {
                setIsAuthenticated(false);
            }
        }
        fetchUser();
    },[token])

    const values = {
        login, signup, user, setUser, isAuthenticated, setIsAuthenticated, loading, setLoading, errorMessage, setErrorMessage, logout, token, setToken, artists, setArtists
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);