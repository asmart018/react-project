import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";

function FilmsPage() {
  let [list, setList] = useState([]);
  let [searchDirector, setSearchDirector] = useState();

  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films/")
      .then((response) => response.json())
      .then((films) => setList(films))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let directors = getListOf(list, "director");

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
      <ul>
        {filmsByDirector.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
