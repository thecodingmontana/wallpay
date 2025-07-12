import React, { SVGProps } from "react";

export function VideosIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="14"
      fill="none"
      viewBox="0 0 18 14"
      {...props}
    >
      <path
        fill="#BFC1C4"
        d="M10 13.75H3A2.75 2.75 0 0 1 .25 11V3A2.75 2.75 0 0 1 3 .25h7A2.75 2.75 0 0 1 12.75 3v8A2.75 2.75 0 0 1 10 13.75m-7-12A1.25 1.25 0 0 0 1.75 3v8A1.25 1.25 0 0 0 3 12.25h7A1.25 1.25 0 0 0 11.25 11V3A1.25 1.25 0 0 0 10 1.75z"
      ></path>
      <path
        fill="#BFC1C4"
        d="M17 11.75a.8.8 0 0 1-.39-.11l-5-3a.75.75 0 0 1-.36-.64V6a.75.75 0 0 1 .36-.64l5-3a.74.74 0 0 1 .76 0 .75.75 0 0 1 .38.65v8a.75.75 0 0 1-.38.65.7.7 0 0 1-.37.09m-4.25-4.17 3.5 2.1V4.32l-3.5 2.1z"
      ></path>
    </svg>
  );
}
