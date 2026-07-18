import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import "./styles/App.css";

function App()
{
  return(
    <div className="app">
      <Sidebar />

      <div className="content">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;