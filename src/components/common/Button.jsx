import React from "react";

function Button({ children, color = "blue", ...props }) {
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
  };

  return (
    <button
      className={`${colorClasses[color]} text-white font-roboto px-4 py-2 rounded`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
