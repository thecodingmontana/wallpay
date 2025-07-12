import React, { SVGProps } from "react";

export function ProfileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8 8.25a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5m0-6a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M15 15.25a.76.76 0 0 1-.75-.75c0-1.95-1.06-3.25-6.25-3.25s-6.25 1.3-6.25 3.25a.75.75 0 1 1-1.5 0C.25 9.75 5.68 9.75 8 9.75s7.75 0 7.75 4.75a.76.76 0 0 1-.75.75"></path>
    </svg>
  );
}
