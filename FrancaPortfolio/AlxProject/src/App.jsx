import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import History from "./screens/History";
import Menu from "./screens/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurMenu" element={<Menu />} />
        <Route path="/History" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
