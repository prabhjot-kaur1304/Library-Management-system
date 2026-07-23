import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";
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

    <li>
        <NavLink to="/">
            <FaHome /> Dashboard
        </NavLink>
    </li>

    <li>
        <NavLink to="/books">
            <FaBook /> Books
        </NavLink>
    </li>

    <li>
        <NavLink to="/students">
            <FaUserGraduate /> Students
        </NavLink>
    </li>

    <li>
        <NavLink to="/issued-books">
            <FaExchangeAlt /> Issued Books
        </NavLink>
    </li>

    <li>
        <NavLink to="/returned-books">
            <FaUndo /> Returned Books
        </NavLink>
    </li>

    <li>
        <NavLink to="/wishlist">
            <FaHeart /> Wishlist
        </NavLink>
    </li>

    <li>
        <NavLink to="/analytics">
            <FaChartBar /> Analytics
        </NavLink>
    </li>

    <li>
        <NavLink to="/settings">
            <FaCog /> Settings
        </NavLink>
    </li>

</ul>
        </div>
    );
}
export default Sidebar;