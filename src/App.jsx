import "./App.css";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { HomePage, FilmsPage, SingleFilmPage } from "./pages/index";

function App(props) {
  return (
    <BrowserRouter>
      <nav className="Nav">
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"films"}>Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="films" element={<FilmsPage />}></Route>
        <Route path="films/:id" element={<SingleFilmPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
