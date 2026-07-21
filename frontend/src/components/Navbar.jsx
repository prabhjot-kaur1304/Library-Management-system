import "./../styles/Navbar.css";
import{ FaMoon , FaSearch , FaUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
function Navbar({ search , setSearch , category ,setCategory })
{
    return(
        <div className="navbar">
            <div className="searchbox">
                <FaSearch />
                <input type="text" placeholder="Search book,authors..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="category-filter">

                  <button 
                  className={category === "All" ? "active" : ""}
                  onClick={() => setCategory("All")}>
        All
    </button>

    <button 
    className={category === "Programming" ? "active" : ""}
    onClick={() => setCategory("Programming")}>
        Programming
    </button>

    <button 
    className={category === "Self Imrovement" ? "active" : ""}
    onClick={() => setCategory("Self Improvement")}>
        Self Improvement
    </button>

    <button 
    className={category === "Productivity" ? "active" : ""}
    onClick={() => setCategory("Productivity")}>
        Productivity
    </button>

                </div>
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