import React, { SVGProps } from "react";

export function StoresIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 18 18"
      {...props}
    >
      <path d="M16.5 5.25h-3v-.5a4.5 4.5 0 1 0-9 0v.5h-3A1.25 1.25 0 0 0 .25 6.5V15A2.75 2.75 0 0 0 3 17.75h12A2.75 2.75 0 0 0 17.75 15V6.5a1.25 1.25 0 0 0-1.25-1.25M6 4.75a3 3 0 1 1 6 0v.5H6zM16.25 15A1.25 1.25 0 0 1 15 16.25H3A1.25 1.25 0 0 1 1.75 15V6.75H4.5V9A.75.75 0 0 0 6 9V6.75h6V9a.75.75 0 1 0 1.5 0V6.75h2.75z"></path>
    </svg>
  );
}
