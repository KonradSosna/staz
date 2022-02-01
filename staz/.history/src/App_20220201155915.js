import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { Buty } from "./Components/Buty/Buty";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Home } from "./Components/Home/Home";

function App() {
  const navigate = useNavigate();

  return (
    <Router>
      {/* <Header />
      <Navbar navigate={navigate} /> */}
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buty" element={<Buty />} />
      </Routes>
    </Router>
  );
}

export default App;
