function filterFilmsByDirector(list, director) {
  let newList = [];

  if (director === "All") {
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

export { filterFilmsByDirector, getListOf };
