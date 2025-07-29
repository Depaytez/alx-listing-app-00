import React from "react";
import { FilterPillProps } from "@/interfaces";

const FilterPill: React.FC<FilterPillProps> = ({label, onClick, isActive}) =>{
 const activeClasses = isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300";
 return(
  <button
  className = {`px-4 py-2 rounded-full text-sm font-medium ${activeClasses} transition-colors duration-200`}
  onClick = {() => onClick && onClick(label)}
  >
   {label}
  </button>
 );
};

export default FilterPill;