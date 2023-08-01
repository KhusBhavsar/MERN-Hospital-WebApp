
import { useSelector } from "react-redux";
import { cancelAppointment } from "../redux/action";
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { hospitalList } from '../redux/productAction';
import { Link } from "react-router-dom";


const Cart = () => {
    const dispatch = useDispatch();
    const hospitalData = useSelector((state) => state.hospitalData);

    useEffect(()=>{
        dispatch(hospitalList())
      },[dispatch])
    return (<div className="big-Container">
        <center><h1>Your Preferred Hospital</h1></center>
        <div className="hospital-page-container">
            <table>
                <tr>
                    <td>Name</td>
                    <td>Location</td>
                    <td>City</td>
                    <td>Number of Active Doctors</td>
                    <td>Overall Rating</td>
                    <td>Doctor-Facility Ratings</td>
                    <td>Type of Hospital</td>
                    <td>Appointment Status</td>
                </tr>
                {
                    hospitalData.map((item) => <tr key={item.key}>
                        <td>{item.name}</td>
                        <td>{item.location}</td>
                        <td>{item.city}</td>
                        <td>{item.active_doctors}</td>
                        <td>{item.overall_ranking}</td>
                        <td>{item.doctor_facility_ranking}</td>
                        <td>{item.other_details}</td>
                        <td><Link to={"/Emergency"}><button class="button-24" onClick={() => dispatch(cancelAppointment(item.id))}>Cancel Appointment</button></Link></td>
</tr>)
                }
            </table>
        </div>
    </div>)
}

export default Cart;