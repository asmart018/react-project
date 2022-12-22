import { useState, useEffect } from "react";
import {
  filterFilmsByDirector,
  getListOf,
  getFilmStats,
} from "../helpers/film.helpers";
import { Link } from "react-router-dom";

function FilmsPage(props) {
  let [list, setList] = useState([]);
  let [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films/")
      .then((response) => response.json())
      .then((films) => setList(films))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let directors = getListOf(list, "director");
  let { avgScore, total, latest } = getFilmStats(filmsByDirector);

  return (
    <div className="App-header">
      <h1>Studio Ghibli Films</h1>
      <form>
        <div className="form-group">
          <label htmlFor="search">Filter by Director</label>
          <select
            className="select"
            name="search"
            id="search"
            onChange={(e) => setSearchDirector(e.target.value)}
            value={searchDirector}
          >
            <option value="All">All</option>
            {directors.map((event, idx) => {
              return (
                <option key={idx} id={idx} value={event}>
                  {event}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <div>
        <div>
          <span>Number Of Films: </span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating: </span>
          <span>{avgScore.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film: </span>
          <span>{latest}</span>
        </div>
      </div>
      <ul>
        {filmsByDirector.map((film) => {
          return (
            <li key={film.id}>
              <Link to={`${film.id}`}>{film.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
