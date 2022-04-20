import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Movie from "../components/Movie";
import Error from "../components/Error";
import Result from "../components/Result";
import { v4 as uuidv4 } from "uuid";

const Homepage = () => {
  //should be env variable
  const auth = "e1dae94e";
  let [searchText, setSearchText] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  //let [isMoreResults, setIsMoreResults] = useState(false);
  let more = false;
  const searchURL = `http://www.omdbapi.com/?apikey=${auth}&s=${searchText}`;

  const search = async () => {
    setPage(1);
    setCurrentSearch(searchText);
    const dataFetch = await fetch(searchURL);
    let parsedData = await dataFetch.json();
    setData(parsedData.Search);
    console.log(parsedData.Search);
    document.getElementById("searchingText").value = "";
  };

  //load more results;
  const moreResults = async () => {
    setPage(page + 1);
  };
  const runMoreResults = async () => {
    if (data) {
      let newURL = `http://www.omdbapi.com/?apikey=${auth}&s=${currentSearch}&page=${page}`;
      const dataFetch = await fetch(newURL);
      let parsedData = await dataFetch.json();
      setData(data.concat(parsedData.Search));
    }
  };
  useEffect(() => {
    runMoreResults();
  }, [page]);
  return (
    <div style={{ minHeight: "100vh" }} className="mainArea">
      <Search search={search} setSearchText={setSearchText} />
      {data === undefined ? (
        <Error />
      ) : (
        <div>
          {data && <Result searchText={currentSearch} />}
          <div className="Movies">
            {data &&
              data.map((d, i, arr) => {
                if (arr.length - 1 === i && arr.length % 10 === 0) {
                  //console.log(arr.length, i);
                  more = true;
                  return <Movie data={d} key={uuidv4()} />;
                } else {
                  more = false;
                  return <Movie data={d} key={uuidv4()} />;
                }
              })}
          </div>
        </div>
      )}
      {more === true ? (
        <div className="moreResults">
          <button onClick={moreResults}>Load More</button>
        </div>
      ) : (
        <br></br>
      )}
    </div>
  );
};

export default Homepage;
