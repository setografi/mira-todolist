import React from "react";

function Button({ children, color = "blue", ...props }) {
  const colorClasses = {
    blue: "bg-primary hover:opacity-75",
    green: "bg-success hover:opacity-75",
    red: "bg-accent hover:opacity-75",
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
