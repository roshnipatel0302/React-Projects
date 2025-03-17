import React from "react";

function Container({ children }) {
  return (
    <div className="w-full md:px-12 lg:px-12 bg-gray-700 shadow-lg  text-white">
      {children}
    </div>
  );
}

export default Container;
