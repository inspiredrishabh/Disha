import { NavLink, useNavigate } from "react-router-dom";
import { Home, LayoutDashboard, BookOpen, PieChart, Settings } from "lucide-react";
import logo from "../../assets/logo.svg"

function Sidebar() {
    const navigate = useNavigate();
  return (
    <>
        <aside className="w-64 bg-purple-50 dark:bg-purple-900 p-4 hidden md:block">
            <div className="flex flex-row items-center gap-4 mb-4 mt-2">
            <img src={logo} className="w-10"></img>
            <div className="text-3xl text-purple-600 font-bold font-Montserrat hover:cursor-pointer" onClick={()=>{navigate('/landing')}}>DISHA</div>
        </div>
      <nav className="space-y-2">
        <NavLink
          to="/"
          className="flex items-center space-x-2 text-black dark:text-black hover:bg-purple-100 dark:hover:bg-purple-800 p-2 rounded-lg"
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/dashboard"
          className="flex items-center space-x-2 text-black dark:text-black hover:bg-purple-100 dark:hover:bg-purple-800 p-2 rounded-lg"
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/courses"
          className="flex items-center space-x-2 text-black dark:text-black hover:bg-purple-100 dark:hover:bg-purple-800 p-2 rounded-lg"
        >
          <BookOpen className="w-5 h-5" />
          <span>Courses</span>
        </NavLink>
        <NavLink
          to="/statistics"
          className="flex items-center space-x-2 text-black dark:text-black hover:bg-purple-100 dark:hover:bg-purple-800 p-2 rounded-lg"
        >
          <PieChart className="w-5 h-5" />
          <span>Statistics</span>
        </NavLink>
        <NavLink
          to="/settings"
          className="flex items-center space-x-2 text-black dark:text-black hover:bg-purple-100 dark:hover:bg-purple-800 p-2 rounded-lg"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </NavLink>
      </nav>
    </aside>
    </>
    
  );
}

export default Sidebar;
