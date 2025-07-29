import { PropertyProps } from "@/interfaces/index";
// export const API_BASE_URL = "https://api.example.com";
// export const DEFAULT_IMAGE = "/assets/default.jpg";

export const FILTER_LABELS: string[] = ["All", "Mountain View", "Ocean View", "Urban Area", "Ogun State", "Kwara State", "Lagos State"];

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
 {
  name: "Depaytez Pallace",
  address: {
   state: "Kwara",
   city: "Ilorin",
   country: "Nigeria",
  },
  rating: 5.0,
  category: ["Luxury Villa", "Pool", "Free Parking"],
  price: 10000,
  offers: {
   bed: "4",
   shower: "4",
   occupants: "5-10",
   description: "A luxurious villa with modern amenities and a beautiful pool.",
  },
  image: "../public/assets/file.svg",
  discount: " "
 },

 {
  name: "Olizho Complex",
  address: {
   state: "Lagos",
   city: "Lekki",
   country: "Nigeria",
  },
  rating: 4.9,
  category: ["luxury Villa", "Free Parking", "Gym"],
  price: 2000,
  offers: {
   bed: "3",
   shower: "3",
   occupants: "2-5",
   description: "A modern complex with gym facilities and free parking.",
  },
  image: "../public/assets/file.svg",
  discount: " "
 },

 {
  name: "Ronaldsco Villa",
  address: {
   state: "Texas",
   city: "Houston",
   country: "USA",
  },
  rating: 4.9,
  category: ["luxury Villa", "Free Parking", "Gym"],
  price: 2000,
  offers: {
   bed: "3",
   shower: "3",
   occupants: "2-5",
   description: "A modern complex with gym facilities and free parking.",
  },
  image: "../public/assets/file.svg",
  discount: " "
 },

 {
  name: "MountainEscape Chalet",
  address: {
   state: "Kwara",
   city: "Oro",
   country: "Nigeria",
  },
  rating: 4.7,
  category: ["Mountain View", "Fireplace", "Self Checkin"],
  price: 4000,
  offers: {
   bed: "4",
   shower: "2",
   occupants: "5-7",
   description: "A cozy chalet with stunning mountain views and a fireplace.",
  },
  image: "../public/assets/file.svg",
  discount: " "
 },

 {
  name: "Urban Oasis Apartment",
  address: {
   state: "California",
   city: "Los Angeles",
   country: "USA",
  },
  rating: 4.8,
  category: ["City Center", "Free WiFi", "Gym"],
  price: 1500,
  offers: {
   bed: "2",
   shower: "2",
   occupants: "1-3",
   description: "A modern apartment in the city center with free WiFi and gym access.",
  },
  image: "../public/assets/file.svg",
  discount: " "
 },

 {
  name: "Beachfront Paradise",
  address: {
   state: "Florida",
   city: "Miami",
   country: "USA",
  },
  rating: 4.9,
  category: ["Beachfront", "Pool", "Free Parking"],
  price: 5000,
  offers: {
   bed: "5",
   shower: "4",
   occupants: "6-12",
   description: "A luxurious beachfront property with a pool and free parking.",
  },
  image: "../public/assets/file.svg",
  discount: " "
 },

 {
  name: "Countryside Retreat",
  address: {
   state: "Ogun",
   city: "Abeokuta",
   country: "Nigeria",
  },
  rating: 4.6,
  category: ["Countryside", "Free Parking", "Self Checkin"],
  price: 2500,
  offers: {
   bed: "3",
   shower: "2",
   occupants: "2-4",
   description: "A peaceful retreat in the countryside with self check-in.",
  },
  image: "../public/assets/file.svg",
  discount: " "
 },

 {
  name: "Luxury Villa",
  address: {
   state: "California",
   city: "Los Angeles",
   country: "USA",
  },
  rating: 4.9,
  category: ["Luxury", "Pool", "Free Parking"],
  price: 3000,
  offers: {
   bed: "4",
   shower: "3",
   occupants: "4-8",
   description: "A luxurious villa with a private pool and stunning views.",
  },
  image: "../public/assets/file.svg",
  discount: " "
 },

 {
  name: "Modern Loft",
  address: {
   state: "New York",
   city: "Brooklyn",
   country: "USA",
  },
  rating: 4.8,
  category: ["Modern", "Free WiFi", "Gym"],
  price: 1800,
  offers: {
   bed: "2",
   shower: "2",
   occupants: "1-3",
   description: "A stylish modern loft with free WiFi and gym access.",
  },
  image: "../public/assets/file.svg",
  discount: " "
 },

 {
  name: "Cozy Cabin",
  address: {
   state: "Colorado",
   city: "Aspen",
   country: "USA",
  },
  rating: 4.7,
  category: ["Cabin", "Fireplace", "Self Checkin"],
  price: 2200,
  offers: {
   bed: "3",
   shower: "2",
   occupants: "2-5",
   description: "A cozy cabin with a fireplace and self check-in.",
  },
  image: "../public/assets/file.svg",
  discount: " "
 },

 // copied from alx code
 {
  name: "Villa Ocean Breeze",
  address: {
  state: "Seminyak",
  city: "Bali",
  country: "Indonesia"
  },
  rating: 4.89,
  category: ["Luxury Villa", "Pool", "Free Parking"],
  price: 3200,
  offers: {
   bed: "3",
   shower: "3",
   occupants: "4-6",
   description: "A luxurious villa with a private pool and ocean views."
  },
  image: "https://example.com/image1.jpg",
  discount: ""
 },

 {
  name: "Mountain Escape Chalet",
  address: {
   state: "Aspen",
   city: "Colorado",
   country: "USA"
  },
  rating: 4.70,
  category: ["Mountain View", "Fireplace", "Self Checkin"],
  price: 1800,
  offers: {
   bed: "4",
   shower: "2",
   occupants: "5-7",
   description: " A cozy chalet with stunning mountain views and a fireplace."
  },
  image: "https://example.com/image2.jpg",
  discount: "30"
 },

 {
  name: "Cozy Desert Retreat",
  address: {
   state: "Palm Springs",
   city: "California",
   country: "USA"
  },
  rating: 4.92,
  category: ["Desert View", "Pet Friendly", "Self Checkin"],
  price: 1500,
  offers: {
   bed: "2",
   shower: "1",
   occupants: "2-3",
   description: "A charming retreat in the desert with pet-friendly options and self check-in."
  },
  image: "https://example.com/image3.jpg",
  discount: ""
 },

 {
  name: "City Lights Penthouse",
  address: {
   state: "New York",
   city: "New York",
   country: "USA"
  },
  rating: 4.85,
  category: ["City View", "Free WiFi", "24h Checkin"],
  price: 4500,
  offers: {
   bed: "2",
   shower: "2",
   occupants: "2-4",
   description: "A luxurious penthouse with stunning city views, free WiFi, and 24-hour check-in."
  },
  image: "https://example.com/image4.jpg",
  discount: "15"
 },

 {
  name: "Riverside Cabin",
  address: {
   state: "Queenstown",
   city: "Otago",
   country: "New Zealand"
  },
  rating: 4.77,
  category: ["Riverside", "Private Dock", "Free Kayaks"],
  price: 2800,
  offers: {
   bed: "3",
   shower: "2",
   occupants: "4-6",
   description: "A charming riverside cabin with a private dock and free kayaks for guests."
  },
  image: "https://example.com/image5.jpg",
  discount: "20"
 },

 {
  name: "Modern Beachfront Villa",
  address: {
   state: "Sidemen",
   city: "Bali",
   country: "Indonesia"
  },
  rating: 4.95,
  category: ["Beachfront", "Private Pool", "Chef Service"],
  price: 5000,
  offers: {
   bed: "5",
   shower: "4",
   occupants: "8-10",
   description: "A modern beachfront villa with a private pool and chef service."
  },
  image: "https://example.com/image6.jpg",
  discount: ""
 },

 {
  name: "Lakeside Chalet",
  address: {
   state: "Banff",
   city: "Alberta",
   country: "Canada"
  },
  rating: 4.65,
  category: ["Lakeside", "Mountain View", "Hiking Trails"],
  price: 2300,
  offers: {
   bed: "3",
   shower: "3",
   occupants: "4-5",
   description: "A charming lakeside chalet with mountain views and access to hiking trails."
  },
  image: "https://example.com/image7.jpg",
  discount: "10"
 },

 {
  name: "Tropical Garden Villa",
  address: {
   state: "Koh Samui",
   city: "Surat Thani",
   country: "Thailand"
  },
  rating: 4.80,
  category: ["Garden", "Free Parking", "Self Checkin"],
  price: 2750,
  offers: {
   bed: "3",
   shower: "3",
   occupants: "5-6",
   description: "A tropical villa surrounded by lush gardens, free parking, and self check-in."
  },
  image: "https://example.com/image8.jpg",
  discount: "25"
 },

 {
  name: "Urban Loft",
  address: {
   state: "Berlin",
   city: "Berlin",
   country: "Germany"
  },
  rating: 4.60,
  category: ["City Center", "Free WiFi", "24h Checkin"],
  price: 2000,
  offers: {
   bed: "2",
   shower: "1",
   occupants: "2-3",
   description: "A stylish urban loft in the city center with free WiFi and 24-hour check-in."
  },
  image: "https://example.com/image9.jpg",
  discount: ""
 },

 {
  name: "Secluded Forest Cabin",
  address: {
   state: "Whistler",
   city: "British Columbia",
   country: "Canada"
  },
  rating: 4.72,
  category: ["Secluded", "Hot Tub", "Self Checkin"],
  price: 2600,
  offers: {
   bed: "4",
   shower: "2",
   occupants: "5-7",
   description: "A secluded forest cabin with a hot tub and self check-in options."
  },
  image: "https://example.com/image10.jpg",
  discount: "40"
 },

 {
  name: "Cliffside Villa",
  address: {
   state: "Amalfi",
   city: "Salerno",
   country: "Italy"
  },
  rating: 4.93,
  category: ["Cliffside", "Infinity Pool", "Sea View"],
  price: 6000,
  offers: {
   bed: "4",
   shower: "4",
   occupants: "6-8",
   description: "A stunning cliffside villa with an infinity pool and breathtaking sea views."
  },
  image: "https://example.com/image11.jpg",
  discount: "50"
 },

 {
  name: "Coastal Escape Villa",
  address: {
   state: "Noosa",
   city: "Queensland",
   country: "Australia"
  },
  rating: 4.83,
  category: ["Beachfront", "Pet Friendly", "Free Parking"],
  price: 3400,
  offers: {
   bed: "3",
   shower: "3",
   occupants: "4-6",
   description: "A coastal escape villa with beachfront access, pet-friendly options, and free parking."
  },
  image: "https://example.com/image12.jpg",
  discount: ""
 },

 {
  name: "Historical Villa",
  address: {
   state: "Florence",
   city: "Tuscany",
   country: "Italy"
  },
  rating: 4.67,
  category: ["Historical", "Free Breakfast", "Self Checkin"],
  price: 2700,
  offers: {
   bed: "2",
   shower: "2",
   occupants: "2-4",
   description: "A beautifully restored historical villa with free breakfast and self check-in options."
  },
  image: "https://example.com/image13.jpg",
  discount: "35"
 },

 {
  name: "Downtown Apartment",
  address: {
   state: "Tokyo",
   city: "Tokyo",
   country: "Japan"
  },
  rating: 4.81,
  category: ["City Center", "Free WiFi", "Public Transport"],
  price: 2200,
  offers: {
   bed: "1",
   shower: "1",
   occupants: "2",
   description: "A modern downtown apartment with free WiFi and easy access to public transport."
  },
  image: "https://example.com/image14.jpg",
  discount: ""
 },

 {
  name: "Luxury Safari Lodge",
  address: {
   state: "Serengeti",
   city: "Mara",
   country: "Tanzania"
  },
  rating: 4.97,
  category: ["Safari", "Guided Tours", "Free Breakfast"],
  price: 4500,
  offers: {
   bed: "4",
   shower: "4",
   occupants: "6-8",
   description: "A luxury safari lodge with guided tours and free breakfast, perfect for wildlife enthusiasts."
  },
  image: "https://example.com/image15.jpg",
  discount: "20"
 },

 {
  name: "Countryside Cottage",
  address: {
   state: "Cotswolds",
   city: "Gloucestershire",
   country: "UK"
  },
  rating: 4.58,
  category: ["Countryside", "Fireplace", "Self Checkin"],
  price: 1800,
  offers: {
   bed: "2",
   shower: "1",
   occupants: "2-4",
   description: "A charming countryside cottage with a fireplace and self check-in options."
  },
  image: "https://example.com/image16.jpg",
  discount: "25"
 },

 {
  name: "Riverfront Mansion",
  address: {
   state: "Paris",
   city: "Île-de-France",
   country: "France"
  },
  rating: 4.86,
  category: ["Riverfront", "Private Garden", "Self Checkin"],
  price: 5000,
  offers: {
   bed: "4",
   shower: "3",
   occupants: "6-8",
   description: "A luxurious riverfront mansion with a private garden and self check-in options."
  },
  image: "https://example.com/image17.jpg",
  discount: "30"
 },

 {
  name: "Ski Chalet",
  address: {
   state: "Zermatt",
   city: "Valais",
   country: "Switzerland"
  },
  rating: 4.75,
  category: ["Mountain View", "Ski Access", "Fireplace"],
  price: 3900,
  offers: {
   bed: "3",
   shower: "3",
   occupants: "4-5",
   description: "A cozy ski chalet with mountain views, ski access, and a fireplace."
  },
  image: "https://example.com/image18.jpg",
  discount: ""
 },

 {
  name: "Island Paradise Villa",
  address: {
   state: "Mahe",
   city: "Victoria",
   country: "Seychelles"
  },
  rating: 4.98,
  category: ["Beachfront", "Private Pool", "Chef Service"],
  price: 6500,
  offers: {
   bed: "5",
   shower: "5",
   occupants: "8-10",
   description: "A luxurious island paradise villa with a private pool and chef service."
  },
  image: "https://example.com/image19.jpg",
  discount: "60"
 },

 {
  name: "Clifftop Retreat",
  address: {
   state: "Cape Town",
   city: "Western Cape",
   country: "South Africa"
  },
  rating: 4.78,
  category: ["Ocean View", "Private Pool", "Self Checkin"],
  price: 4100,
  offers: {
   bed: "3",
   shower: "3",
   occupants: "4-5",
   description: "A stunning clifftop retreat with ocean views, a private pool, and self check-in options."
  },
  image: "https://example.com/image20.jpg",
  discount: ""
 }
];
