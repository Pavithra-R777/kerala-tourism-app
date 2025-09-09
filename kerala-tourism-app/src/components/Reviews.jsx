import React, { useState } from "react";

export default function Reviews({ destination }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  const addReview = () => {
    if(newReview.trim()){
      setReviews([...reviews, newReview]);
      setNewReview("");
    }
  };

  return (
    <div className="card-form">
      <h2>Reviews for {destination.name}</h2>
      <textarea value={newReview} onChange={(e)=>setNewReview(e.target.value)} placeholder="Write a review..."/>
      <button onClick={addReview}>Submit Review</button>
      <ul>
        {reviews.map((r, i)=> <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}
