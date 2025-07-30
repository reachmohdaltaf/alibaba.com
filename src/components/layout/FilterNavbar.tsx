import { AlignCenter } from "lucide-react";
import Link from "next/link";
const labels = [
  {
    name: "All",
    icon: <AlignCenter size={20}/>,
  },
  {
    name: "Featured Selection",
  },
  {
    name: "Order Protections",
  },
  {
    name: "AI Sourcing agent",
  },
  {
    name: "Buyer Central",
  },
  {
    name: "help Center",
  },
  {
    name: "App & Extension",
  },
  {
    name: "Become a suppliers",
  },
];

const FilterNavbar = () => {
  return (
    <div className="bg-primary flex justify-between items-center h-6">
      <ul className="flex text-sm items-center gap-6">
        {labels.map((label, index) => {
          return (
            <Link href={'/'} key={index} className="flex items-center gap-1">
             {label.icon? label.icon : null}
              {label.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterNavbar;
