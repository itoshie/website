import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import  About  from "./pages/About";
import "./styles/App.css";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}