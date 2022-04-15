import "../styles/App.css";
import Header from '../components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "../pages/CreateEmployee/CreateEmployee";



function App() {
  return (
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
