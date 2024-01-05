// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from './Pages/AllRoutes';

function App() {
  return (
    <Router>
    <Navbar />
    <AllRoutes/>
    </Router>
  );
}

export default App;
