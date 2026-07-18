import "../styles/Sidebar.css";

import{
    FaHome,
    FaBook,
    FaUserGraduate,
    FaExchangeAlt,
    FaUndo,
    FaHeart,
    FaChartBar,
    FaCog,
} from "react-icons/fa"; /*fa-font awesome */

function Sidebar()
{
    return(
        <div className="sidebar">
            <h2 className="logo">LibraryHub</h2>

            <ul className="menu">
                <li><FaHome />DashBoard</li>
                <li><FaBook />Books</li>
                <li><FaUserGraduate />Studenst</li>
                <li><FaHome />Issue books</li>
                <li><FaExchangeAlt />Return BOOks</li>
                <li><FaHeart />Wishlsits</li>
                <li><FaChartBar />Analytics</li>
                <li><FaCog /> Settings</li>
            </ul>
        </div>
    );
}
export default Sidebar;