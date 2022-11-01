import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from './components/Table';
import LineChart from './components/LineChart';
import NavBar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/overview" element={<LineChart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
