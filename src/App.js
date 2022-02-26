import "./styles.css";
import {Song} from './songs'
import { useState } from "react";

export default function App() {
const [filterName, setFilterName] = useState(false)
const [filterDuration, setFilterDuration] = useState(false)

const handleChange = (e) => {
  let value = e.target.value
  console.log(value)
  if(value === 'name') {
    setFilterName(true);
  } else {setFilterName(false);}
  if(value === 'duration') {
    setFilterDuration(true);
  } else {setFilterDuration(false)}
}
return (
    <div className="App">
      <div>
        <select onChange={handleChange}>
          <option>All</option>
          <option value='name'>Name</option>
          <option value='duration'>Duration</option>
        </select>
      </div>
      {(filterName && Song) ? 
      <>
      {
        Song.map(song => 
        <h3>{song.name}</h3>
        )}
      </> 
      : 
      (filterDuration && Song) ? 
        <>
        {
          Song.map(song => 
          <h3>{song.duration}</h3>
          )}
        </> 
        :
      Song.map((song,i) => 
        <div key={i}>
          <h3>{song.name}</h3>
          <p>{song.duration}</p>
        </div> 
         )
      }

      
   
    
    </div>
  );
}
