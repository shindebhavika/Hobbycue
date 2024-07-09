import { useState } from 'react';
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi2";
import { FaLocationDot, FaCalendarCheck } from "react-icons/fa6";

const iconMapping = {
  "People": HiUserGroup,
  "Product": PiShoppingCartSimpleFill,
  "Place": FaLocationDot,
  "Program": FaCalendarCheck,
};

function Card({ title, description, src, btn, hoverColor }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconStyle = {
    
   color: isHovered ? 'white' : hoverColor
  };



  const IconComponent = iconMapping[title];

  return (
    <div
      className="card w-50 border "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovered ? hoverColor || 'red' : 'initial',
        borderColor:isHovered?"white":"grey"
      }}

    >
      <div className="card-body">
        <h5 className="card-title" style={{ color: isHovered ? 'white' : 'initial' }}>
          {IconComponent && <IconComponent style={iconStyle} />}
          {title}
        </h5>
        <p className="card-text " style={{ color: isHovered ? 'white' : 'initial' }}>{description}</p>
     
        <button className=" px-4 py-2 text-purple-500 border border-purple-500 rounded-lg hover:bg-purple-500 " style={{ color: isHovered ? 'white' : 'initial'  ,borderColor:isHovered?"white":"initial"}}>{btn}</button>

      </div>
    </div>
  );
}

export default Card;
