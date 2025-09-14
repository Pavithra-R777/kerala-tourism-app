// src/data/districtData.js

export const districts = [
  {
    id: "trivandrum",
    name: "Thiruvananthapuram",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Sree_Padmanabhaswamy_temple.jpg",
    categories: {
      visiting: [
        { name: "Padmanabhaswamy Temple", image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Sree_Padmanabhaswamy_temple.jpg" },
        { name: "Kovalam Beach", image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Kovalam_Beach.jpg" },
        // add more up to 10...
      ],
      hotels: [
        { name: "Hotel Taj Vivanta", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/39/05/0f/hotel.jpg" },
        // ...
      ],
      restaurants: [
        { name: "Villa Maya", image: "https://media-cdn.tripadvisor.com/media/photo-s/09/41/43/82/villa-maya.jpg" },
        // ...
      ],
      resorts: [
        { name: "Poovar Island Resort", image: "https://pix10.agoda.net/hotelImages/42033/-1/8ee3c54fa8b9.jpg" },
        // ...
      ]
    }
  },
  {
    id: "kollam",
    name: "Kollam",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Backwaters_in_Kollam.jpg",
    categories: {
      visiting: [
        { name: "Ashtamudi Lake", image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Backwaters_in_Kollam.jpg" },
        // ...
      ],
      hotels: [],
      restaurants: [],
      resorts: []
    }
  },
  // Add remaining 12 districts in the same structure...
];
