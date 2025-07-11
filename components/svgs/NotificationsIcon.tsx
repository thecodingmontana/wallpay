import React, { SVGProps } from "react";

export function NotificationsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="currentColor"
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        d="M20.53 16.75c-.09 0-2.11-.36-2.11-6.25 0-4.16-2.42-6.75-6.42-6.75S5.58 6.34 5.58 10.5c0 6-2.09 6.25-2.08 6.25a.75.75 0 1 0 0 1.5h4.83a3.74 3.74 0 0 0 7.34 0h4.84a.75.75 0 1 0 0-1.5zm-8.53 3a2.24 2.24 0 0 1-2.11-1.5h4.22a2.24 2.24 0 0 1-2.11 1.5m-6.24-3c.72-1.09 1.32-3 1.32-6.25S8.88 5.25 12 5.25s4.92 1.91 4.92 5.25.6 5.16 1.32 6.25z"
      ></path>
      <circle cx="18" cy="5.5" r="4" fill="#CD0031"></circle>
    </svg>
  );
}
