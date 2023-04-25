import "src/App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "src/pages/Home";
import Detail from "src/pages/Detail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
