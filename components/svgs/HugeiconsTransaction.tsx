import React, { SVGProps } from "react";

export function HugeiconsTransaction(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        color="currentColor"
      >
        <path d="M4.58 8.607L2 8.454C3.849 3.704 9.158 1 14.333 2.344c5.513 1.433 8.788 6.918 7.314 12.25c-1.219 4.411-5.304 7.337-9.8 7.406" />
        <path d="M12 22C6.5 22 2 17 2 11m11.604-1.278c-.352-.37-1.213-1.237-2.575-.62c-1.361.615-1.577 2.596.482 2.807c.93.095 1.537-.11 2.093.47c.556.582.659 2.198-.761 2.634s-2.341-.284-2.588-.509m1.653-6.484v.79m0 6.337v.873" />
      </g>
    </svg>
  );
}
export default HugeiconsTransaction;
