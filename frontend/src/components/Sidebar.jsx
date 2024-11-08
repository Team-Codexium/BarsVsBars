import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-64  p-4 flex flex-col  space-y-4">
    <nav className="space-y-2">
        {/* For later */}
      
      <Link
        to="/dashboard/create-battle"
        className="block text-left p-2 hover:bg-gray-700 rounded"
      >
        Challenge
      </Link>
      <Link to="/dashboard/battles" className="block text-left p-2 hover:bg-gray-700 rounded">
        Live Battles
      </Link>
      <Link to="/dashboard/top-artists" className="block text-left p-2 hover:bg-gray-700 rounded">
        Top Artist
      </Link>
    </nav>
    <button className="mt-auto flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
      <span>Logout</span>
    </button>
  </aside>
);


export default Sidebar;