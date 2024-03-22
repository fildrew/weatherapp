import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import SearchNotGood from "./components/SearchNotGood";
import PageNotFound from "./components/PageNotFound";
import WeatherNavbar from "./components/WeatherNavbar";
import WeatherApp from "./components/WeatherApp";
import WeatherDetails from "./components/WeatherDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <WeatherNavbar/>
      <Routes>
        <Route path="/" element={<WeatherApp/>}></Route>
        <Route path="/weather:city" element={<WeatherDetails/>}></Route>
        <Route path="/notFound" element={<SearchNotGood />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
