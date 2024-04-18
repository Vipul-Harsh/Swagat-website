import React, { useState } from "react";
import DatePicker from "react-datepicker";

function Roomsidebar(props) {
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [departureDate, setDepartureDate] = useState(new Date());
    return (
        <div className="room-booking-form">
            <h5 className="title">Check Availability</h5>
            <form action="#">
                <div className="input-group input-group-two left-icon mb-20">
                    <label htmlFor="arrival-date">Check In</label>
                    <div className="icon"><i className="fal fa-calendar-alt" /></div>
                    <DatePicker selected={arrivalDate} onChange={date => setArrivalDate(date)} />
                </div>
                <div className="input-group input-group-two left-icon mb-20">
                    <label htmlFor="departure-date">Check Out</label>
                    <div className="icon"><i className="fal fa-calendar-alt" /></div>
                    <DatePicker selected={departureDate} onChange={date => setDepartureDate(date)} />
                </div>
                <div className="input-group input-group-two  mb-20">
                    <label htmlFor="room">Rooms</label>
                    <div className="">
                        {/* <select name="room" id="room">
                            <option value={1}>1 Room</option>
                            <option value={2}>2 Room</option>
                            <option value={4}>4 Room</option>
                            <option value={8}>8 Room</option>
                        </select> */}
                        <input type="number" name="room" id="room" defaultValue={1} />
                    </div>
                </div>
                <div className="input-group input-group-two left-icon mb-20">
                    <label htmlFor="departure-date">Guest</label>
                    <div className="">
                    <input type="number" name="room" id="room" defaultValue={1} />
                    </div>
                </div>
                <div className="input-group">
                    <button className="main-btn btn-filled bookbtn">check availability</button>
                </div>
            </form>
        </div>
    );
}

export default Roomsidebar;