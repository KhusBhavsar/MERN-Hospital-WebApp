import React from 'react'; // Make sure to import React
import { useDispatch } from 'react-redux';
import { hospitalSearch, activeList, highestRating } from '../redux/productAction';


const UpperBox = () => { // Rename the component to start with an uppercase letter
  const dispatch = useDispatch();

 

  return (
    <div className="header">
      <div className='search-box'>
        <input type="text" onChange={(event) => dispatch(hospitalSearch(event.target.value))} placeholder='&#128269; Search Hospital by name, location, city, type' />
      </div>
      <div className="filter" style={{ display: "flex" }}>
        <span>Filters:</span>
        <button onClick={(event) => dispatch(activeList(event.target.value))}>Maximum Active Doctors</button>
      <button onClick={(event) => dispatch(highestRating(event.target.value))}>Highest Rating</button>
      </div>
    </div>
  )
}

export default UpperBox; // Rename the export to match the component name
