import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import WeatherApp from "./components/WeatherApp";
import ErrorSearch from "./components/ErrorSearch";
import WeatherShow from "./components/WeatherShow";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav></nav>
      <Routes>
        <Route path="/" element={<WeatherApp/>}></Route>
        <Route path="/WeatherShow:cityName" element={<WeatherShow/>}/>
        <Route path="/notFound" element={<ErrorSearch/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
