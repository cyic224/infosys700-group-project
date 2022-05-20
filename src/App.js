import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./Login";
import Authentication from "./Authentication";
import Transaction from "./Transaction";
import Main from "./Main";
import Success from "./Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/Authentication" element={<Authentication />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
