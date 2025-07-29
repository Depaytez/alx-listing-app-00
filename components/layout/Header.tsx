// import AccommodationType from "../common/AccommodationType";

const Header: React.FC = () => {
 return (
  <header className = "header_class bg-gray-800 text-white p-4 flex justify-between items-center">
   <h1> ALX Property Listing App</h1>

   {/* placeholder for navigation/search/signbtn links */}
   <nav className="flex justify-between items-center">
    <ul className="flex space-x-4">
     <li><a href="#" className="hover:text-gray-300">Rooms</a></li>
     <li><a href="#" className="hover:text-gray-300">Mansion</a></li>
     <li><a href="#" className="hover:text-gray-300">Countryside</a></li>
     <li><a href="#" className="hover:text-gray-300">Sign In</a></li>
     <li><a href="#" className="hover:text-gray-300">Sign Up</a></li>
    </ul>

   </nav>
    {/* <AccommodationType 
    onClick={handleAccommodationTypeClick}
    title="Type of Accommodation" 
    /> */}

    {/* <SearchBar></SearchBar> */}
    {/* <SignBtn></SignBtn> */}
    {/* <Logo></Logo> */}
   
  </header>
 );
}

export default Header;
