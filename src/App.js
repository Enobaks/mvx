import "./App.css";
import { Song } from "./songs";
import { useState } from "react";

export default function App() {
  const [filterName, setFilterName] = useState(false);
  const [filterDuration, setFilterDuration] = useState(false);
  const [ascending, setAscending] = useState(false);
  const [descending, setDescending] = useState(false)

  const handleChange = (e) => {
    let value = e.target.value;
    console.log(value);
    setAscending(true)
    if (value === "name") {
      setFilterName(true);
    } else {
      setFilterName(false);
    }
    if (value === "duration") {
      setFilterDuration(true);
    } else {
      setFilterDuration(false);
    }
  };

  const handleSort = (e) => {
    let sort = e.target.value;
    console.log(sort);
    if (sort === "ascending") {
      setAscending(true);
    } else {
      setAscending(false);
    }
    if (sort === "descending") {
      setDescending(true);
    } else {
      setDescending(false);
    }
    if (sort === "null") {
      setDescending(false);
      setAscending(false);
    }
  };
  return (
    <div className="App">
      <div>
        <select onChange={handleChange}>
          <option>All</option>
          <option value="name">Name</option>
          <option value="duration">Duration</option>
        </select>
        <select className="sort" onChange={handleSort}>
          <option value='null'>All</option>
          <option value="ascending">Ascending Order</option>
          <option value="descending">Descending Order</option>
        </select>
      </div>
      {filterName && Song && ascending ? (
        <>
          {Song.sort((a,b) => a.name > b.name ? 1 : -1).map((song) => (
            <h3>{song.name}</h3>
          ))}
        </>
      ) : filterName && Song && descending ? (
        <>
          {Song.sort((a,b) => a.name < b.name ? 1 : -1).map((song) => (
            <h3>{song.name}</h3>
          ))}
        </>
      ) 
      :
      filterDuration && Song && ascending ? (
        <>
          {Song.sort((a,b) => a.duration - b.duration).map((song) => (
            <p>Duration: {song.duration}</p>
          ))}
        </>
      ) : filterDuration && Song && descending ? (
        <>
          {Song.sort((a,b) => b.duration - a.duration).map((song) => (
            <p>Duration: {song.duration}</p>
          ))}
        </>
      )
      : ascending ?  (
        Song.sort((a,b) => a.name > b.name ? 1 : -1;
        return a.duration > b.duration
          ).map((song, i) => (
          <div key={i}>
            <h3>{song.name}</h3>
            <p>Duration: {song.duration}</p>
          </div>
        ))
      ) 
      :
      (
        Song.map((song, i) => (
          <div key={i}>
            <h3>{song.name}</h3>
            <p>Duration: {song.duration}</p>
          </div>
        ))
      )}
    </div>
  );
}
