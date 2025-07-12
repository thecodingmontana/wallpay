import React, { SVGProps } from "react";

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="14"
      fill="none"
      viewBox="0 0 16 14"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9 13.75a.74.74 0 0 1-.53-.22.75.75 0 0 1 0-1.06L13.94 7 8.47 1.53A.75.75 0 0 1 9.53.47l6 6a.75.75 0 0 1 0 1.06l-6 6a.74.74 0 0 1-.53.22"
      ></path>
      <path
        fill="currentColor"
        d="M15 7.75H1a.75.75 0 0 1 0-1.5h14a.75.75 0 1 1 0 1.5"
      ></path>
    </svg>
  );
}
