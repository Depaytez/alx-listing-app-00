// export interface CardProps {
//   title: string;
//   description: string;
//   image: string;
// }

// export interface ButtonProps {
//   label: string;
//   onClick: () => void;
// }

export interface FilterPillProps {
  label: string;
  onClick?: (label:string) => void;
  isActive?: boolean;
}

export interface PropertyProps {
  name: string;
  address: {
   state: string;
   city: string;
   country: string;
  },
  rating: number;
  category: string[];
  price: number;
  offers: {
   bed: string;
   shower: string;
   occupants: string;
   description?: string;
  },
  image: string;
  discount?: string;
}

// export interface accommodationTypeProps {
//  title: string;
//  onClick: () => void;
// }

export interface LayoutProps {
  children: React.ReactNode; /* Props for layout components, containing React children nodes to be rendered within the layout. */
}