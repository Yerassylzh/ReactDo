import React, { useEffect } from "react";
import $ from "jquery";

function DownArrow({ color, onClick = (e) => {} }) {
  return (
    <button
      className="bg-transparent border-none cursor-pointer"
      onClick={(e) => {
        const button = $(e.target.closest("button"));
        if (button.hasClass("forward180")) {
          button.removeClass("forward180").addClass("backward180");
        } else {
          button.removeClass("backward180").addClass("forward180");
        }

        onClick(e);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-6 ${color}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

export default DownArrow;
