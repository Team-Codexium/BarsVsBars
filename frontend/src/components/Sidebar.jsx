import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../../contexts/AuthContext";
const Sidebar = () => {
  const { logout } = useAuth();
  return(
  <aside className="w-64  p-4 flex flex-col  space-y-4">
    <nav className="space-y-2">
        {/* For later */}
      
      <Link
        to="/dashboard/challenge"
        className="block text-left p-2 hover:bg-gray-700 rounded"
      >
        Challenge
      </Link>
      <Link to="/dashboard/battles" className="block text-left p-2 hover:bg-gray-700 rounded">
        Live Battles
      </Link>
      <Link to="/dashboard/top-artists"  className="block text-left p-2 hover:bg-gray-700 rounded">
        Top Artist
      </Link>
    </nav>
    <button onClick={logout}>
      Log Out
    </button>
  </aside>
);

}
export default Sidebar;