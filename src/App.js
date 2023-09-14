// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./component/Add";
import Card from "./component/Card";
import View from "./component/View";
import Update from "./component/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/card" element={<Card />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/update/:id" element={<Update />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
