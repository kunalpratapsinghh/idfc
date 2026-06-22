import * as React from "react";

export const ChevronRight: React.FC<React.SVGProps<SVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="42"
    height="42"
    fill="none"
    viewBox="0 0 42 42"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
        d="M14.875 21h10.5m-3.5-5.25 5.25 5.25-5.25 5.25M3.5 21c0 9.665 7.835 17.5 17.5 17.5S38.5 30.665 38.5 21 30.665 3.5 21 3.5 3.5 11.335 3.5 21"
      ></path>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 42h42V0H0z"></path>
      </clipPath>
    </defs>
  </svg>
);
export default React.memo(ChevronRight);
