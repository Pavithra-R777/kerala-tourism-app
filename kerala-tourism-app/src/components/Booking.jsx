import React, { useState } from "react";

export default function Booking({ destination }) {
  const [booking, setBooking] = useState({ hotel: "", activity: "", date: "" });

  const handleChange = (e) => setBooking({ ...booking, [e.target.name]: e.target.value });

  const handleBooking = () => {
    alert(`Booking confirmed!\nHotel: ${booking.hotel}\nActivity: ${booking.activity}\nDate: ${booking.date}`);
  };

  return (
    <div className="card-form">
      <h2>Book your trip to {destination.name}</h2>
      <input type="text" name="hotel" placeholder="Hotel Name" value={booking.hotel} onChange={handleChange} />
      <input type="text" name="activity" placeholder="Activity" value={booking.activity} onChange={handleChange} />
      <input type="date" name="date" value={booking.date} onChange={handleChange} />
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
}
