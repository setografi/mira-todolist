import React from "react";

function Button({ children, color = "blue", ...props }) {
  const colorClasses = {
    blue: "bg-primary hover:opacity-85",
    green: "bg-success hover:opacity-85",
    red: "bg-accent hover:opacity-85",
  };

  return (
    <button
      className={`${colorClasses[color]} text-white font-roboto px-4 py-2 rounded flex items-center justify-center transition-all duration-300`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
