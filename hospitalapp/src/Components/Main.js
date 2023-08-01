import React, { useEffect } from 'react'; // Make sure to import React and useEffect
import { bookAppointment } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { hospitalList } from '../redux/productAction';
import { Link } from 'react-router-dom';

function LowerBox() { // Rename the component to start with an uppercase letter
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(hospitalList())
  }, [dispatch]);

  return (
    <div>
      <div className='hospital-container'>
        {
          data.map((item) => <div className='hospital-item' key={item.key}>
            {/* <img src={item.photo} alt="" /> */}
            <div>Name : {item.name} </div>
            <div>Location : {item.location} </div>
            <div>City : {item.city} </div>
            <div>Active Doctors : {item.active_doctors} </div>
            <div>Overall Ranking : {item.overall_ranking} </div>
            <div>Doctor-Facility Ranking : {item.doctor_facility_ranking} </div>
            <div>Type Of Hospital: {item.other_details} </div>
            <div>
              <Link to={"/Appointments"}>
                <button className="button-24" onClick={() => dispatch(bookAppointment(item))}>Book Appointment</button>
              </Link>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default LowerBox; // Rename the export to match the component name
