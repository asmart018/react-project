function filterFilmsByDirector(list, director) {
  let newList = [];

  if (director === "" || director == "All") {
    return list;
  } else {
    newList = list.filter(function (e) {
      return e.director === director;
    });
  }

  return newList;
}

function getListOf(list, prop) {
  let newList = [];
  list.filter((e) => {
    let test = Object.getOwnPropertyDescriptor(e, prop);
    newList.push(test.value);
    return test.value;
  });

  let directors = [...new Set(newList)];
  return directors;
}

function getFilmStats(list) {
  return list.reduce(
    (stats, film) => {
      stats.total++;
      stats.scoreSum += Number(film.rt_score);
      stats.avgScore = stats.scoreSum / stats.total;

      if (stats.latest) {
        if (stats.latest < film.release_date) {
          stats.latest = film.release_date;
        }
      } else stats.latest = Number(film.release_date);
      return stats;
    },
    {
      scoreSum: 0,
      avgScore: 0,
      total: 0,
      latest: null,
    }
  );
}

export { filterFilmsByDirector, getListOf, getFilmStats };
