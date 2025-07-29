import { accommodationTypeProps } from "../../interfaces/index"

const AccommodationType: React.FC<accommodationTypeProps> = ({title, onClick}) => {
 return (
  <div 
  className="accommodationType_class"
  onClick={onClick}
  style={{cursor: 'pointer'}}
  >
   {title}
  </div>
 );
}

export default AccommodationType