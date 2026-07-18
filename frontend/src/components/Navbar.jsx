import "./../styles/Navbar.css";
import{ FaMoon , FaSearch , FaUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
function Navbar()
{
    return(
        <div className="navbar">
            <div className="searchbox">
                <FaSearch />
                <input type="text" placeholder="Search book,authors..." />
            </div>

            <div className="navicons">
                <FaMoon />
                <IoNotifications />
                <FaUserCircle />
            </div>
        </div>
    );
}

export default Navbar;