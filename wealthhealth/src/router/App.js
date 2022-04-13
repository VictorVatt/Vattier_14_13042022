import "../styles/App.css";
import Header from '../components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "../pages/CreateEmployee/CreateEmployee";
import GlobalState from "../state/StateGlobale";



function App() {
  return (
    <GlobalState>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
