import React, { useState } from 'react';
import './Userform.css'

const UserForm = () => {
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [preferred_date, setPreferredDate] = useState('');
    const [preferred_time, setPreferredTime] = useState('');
    const [reason, setReason] = useState('');
    const [department, setDepartment] = useState('');
    const [insurance_provider, setInsuranceProvider] = useState('');
    const [policy_number, setPolicyNumber] = useState('');
    const [primary_physician, setPrimaryPhysician] = useState('');
    const [medical_conditions, setMedicalConditions] = useState('');
    const [surgeries, setSurgeries] = useState('');
    const [allergies, setAllergies] = useState('');
    const [language, setLanguage] = useState('');
    const [accessibility, setAccessibility] = useState('');
    const [additional_info, setAdditionalInfo] = useState('');
    const [consent, setConsent] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.warn(fullName, dob, gender, phone, email, address, preferred_date, preferred_time, reason, department, insurance_provider, policy_number, primary_physician, medical_conditions, surgeries, allergies, language, accessibility, additional_info, consent);
        try {
            let result = await fetch("http://localhost:5000/api/user", {
                method: "post",
                body: JSON.stringify({ fullName, dob, gender, phone, email, address, preferred_date, preferred_time, reason, department, insurance_provider, policy_number, primary_physician, medical_conditions, surgeries, allergies, language, accessibility, additional_info, consent }),
                headers: {
                    "Content-type": "application/json",
                },
            });
            const response = await result.text();
            console.log(response);
            if (!response.ok) {
                setSubmitMessage('We have received your Appointment request');
                console.warn("data saved");
            } else {
                setSubmitMessage('Error booking Appointment');
            }

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className='appointForm'>
            <div className="contain1">
                <form onSubmit={handleSubmit}>
                <h2 style={{marginTop:"30px"}}>Submit Patient Details</h2>
                    <div className="div1">
                        <div className="left1">
                            <label style={{ margin: "10px 0px" }}>
                                Full Name: <br />
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Date of Birth: <br />
                                <input
                                    type="date"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Gender: <br />
                                <input
                                    type="text"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Phone Number: <br />
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Email Address: <br />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Address: <br />
                                <input
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                ></input>
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Preferred Date: <br />
                                <input
                                    type="date"
                                    value={preferred_date}
                                    onChange={(e) => setPreferredDate(e.target.value)}
                                />
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Preferred Time: <br />
                                <input
                                    type="time"
                                    value={preferred_time}
                                    onChange={(e) => setPreferredTime(e.target.value)}
                                />
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Reason for Appointment: <br />
                                <textarea
                                    style={{ height: "130px" }}
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                ></textarea>
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Preferred Department: <br />
                                <input
                                    type="text"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className="right1">
                            <label style={{ margin: "10px 0px" }}>
                                Insurance Provider: <br />
                                <input
                                    type="text"
                                    value={insurance_provider}
                                    onChange={(e) => setInsuranceProvider(e.target.value)}
                                />
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Policy Number: <br />
                                <input
                                    type="text"
                                    value={policy_number}
                                    onChange={(e) => setPolicyNumber(e.target.value)}
                                />
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Primary Care Physician: <br />
                                <input
                                    type="text"
                                    value={primary_physician}
                                    onChange={(e) => setPrimaryPhysician(e.target.value)}
                                />
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Medical Conditions: <br />
                                <input
                                    value={medical_conditions}
                                    onChange={(e) => setMedicalConditions(e.target.value)}
                                ></input>
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Previous Surgeries: <br />
                                <textarea
                                    style={{ height: "130px" }}
                                    value={surgeries}
                                    onChange={(e) => setSurgeries(e.target.value)}
                                ></textarea>
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Known Allergies: <br />
                                <textarea
                                    style={{ height: "130px" }}
                                    value={allergies}
                                    onChange={(e) => setAllergies(e.target.value)}
                                ></textarea>
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Preferred Language: <br />
                                <input
                                    type="text"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                />
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Accessibility Requirements: <br />
                                <input
                                    value={accessibility}
                                    onChange={(e) => setAccessibility(e.target.value)}
                                ></input>
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Additional Information: <br />
                                <textarea
                                    style={{ height: "130px" }}
                                    value={additional_info}
                                    onChange={(e) => setAdditionalInfo(e.target.value)}
                                ></textarea>
                            </label>

                            <label style={{ margin: "10px 0px" }}>
                                Consent: <br />
                                <div className="inside" style={{ display: "flex" }}>
                                    <input
                                        style={{ width: "20px", height: "20px", marginRight: "10px" }}
                                        type="checkbox"
                                        checked={consent}
                                        onChange={(e) => setConsent(e.target.checked)}
                                    />
                                    I consent to use my personal information for appointment scheduling.
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="div">
                        <center><button class="button-24" type='submit' style={{marginBottom:"20px"}}>Book Appointment</button></center>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;