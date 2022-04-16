import "../styles/App.css";
import Header from '../components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "../pages/CreateEmployee/CreateEmployee";
import CurrentEmployee from "../pages/CurrentEmployee/CurrentEmployee";



function App() {
  return (
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/list" element={<CurrentEmployee />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
