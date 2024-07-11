import React from "react";

const Card = ({ children, bg = "bg-gray-100" }) => {
  return <div className={`${bg} p-4 rounded-lg  shadow-md`}>{children}</div>;
};

export default Card;
