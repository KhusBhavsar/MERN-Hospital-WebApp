import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doctorsList } from '../redux/productAction';
import '../App.css'
import Navbar from './Navbar';

function DoctorsStaffDirectory() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.doctorData);
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(doctorsList())
  }, [dispatch]);

  return (
    <div>
    <Navbar/>
      <div className='doctor-container'>
      <h1 style={{color:"white", textAlign:"center"}} className='heading1'>TOP DOCTORS ASSOCIATED WITH US</h1>
        {
          data.map((item) => <div className='doctor-item' key={item.key}>
          <div className="left2" style={{width:"35%"}}>
            <img src={item.profile_picture} alt="" style={{width:"100%", height:"100%"}}/>
          </div>
           <div className="right2" style={{width:"55%", padding:"20px"}}>
           <div>Name : {item.name} </div>
            <div>Specialty : {item.specialty} </div>
            <div>Experience : {item.experience} </div>
            <div>Contact : {item.contact.phone}</div>
            <div>Email : {item.contact.email} </div>
            <div>Available Timings : {item.availability} </div>
            <div>Consultation Fee : {item.consultation_fee} </div>
            <div>Address: {item.address.line1} {item.address.city} {item.address.state} {item.address.pincode} </div>
           </div>
          </div>)
        }
      </div>
    </div>
  );
}


export default DoctorsStaffDirectory
