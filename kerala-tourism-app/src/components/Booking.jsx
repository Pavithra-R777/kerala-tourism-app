/*import React, { useState } from "react";

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
*/
import React, { useState } from "react";

const HOTEL_LINKS = [
  { name: "Book on Booking.com", url: "https://www.booking.com/" },
  { name: "Book on MakeMyTrip", url: "https://www.makemytrip.com/" },
];

const TRANSPORT_LINKS = [
  { name: "Book Bus Ticket", url: "https://onlineksrtcswift.com/" },
  { name: "Book Train Ticket", url: "https://www.irctc.co.in/nget/train-search" },
  { name: "Book Flight Ticket", url: "https://www.air.irctc.co.in/" },
];

export default function Booking({ destination }) {
  const [showStay, setShowStay] = useState(false);
  const [showTransport, setShowTransport] = useState(false);

  return (
    <div
      className="card-form"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem"
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Book your trip to {destination.name}
      </h2>
      <div style={{
        display: "flex",
        gap: "1rem",
        marginBottom: "1rem",
        justifyContent: "center",
      }}>
        <button onClick={() => setShowStay(prev => !prev)}>
          Choose Accommodation
        </button>
        <button onClick={() => setShowTransport(prev => !prev)}>
          Choose Transport
        </button>
      </div>
      {showStay && (
        <div style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1rem",
          justifyContent: "center"
        }}>
          {HOTEL_LINKS.map(opt => (
            <button
              key={opt.name}
              onClick={() => window.open(opt.url, "_blank")}
              style={{ fontSize: "0.95rem" }}
            >
              {opt.name}
            </button>
          ))}
        </div>
      )}
      {showTransport && (
        <div style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center"
        }}>
          {TRANSPORT_LINKS.map(opt => (
            <button
              key={opt.name}
              onClick={() => window.open(opt.url, "_blank")}
              style={{ fontSize: "0.95rem" }}
            >
              {opt.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
