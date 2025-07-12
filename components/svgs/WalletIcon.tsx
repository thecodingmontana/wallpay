import React, { SVGProps } from "react";

export function WalletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 18 18"
      {...props}
    >
      <path d="M16 4.25h-.25V2A1.76 1.76 0 0 0 14 .25a.7.7 0 0 0-.24 0l-11.9 4h-.27l-.17.06h-.14l-.16.09-.12.17-.14.12-.11.1-.12.15a.4.4 0 0 0-.08.1 2 2 0 0 0-.1.18l-.06.11a2 2 0 0 0-.07.22.5.5 0 0 1 0 .11 2 2 0 0 0 0 .34v10A1.76 1.76 0 0 0 2 17.75h14A1.76 1.76 0 0 0 17.75 16V6A1.76 1.76 0 0 0 16 4.25m-1.92-2.49a.26.26 0 0 1 .17.24v2.25H6.62zM16.25 16a.25.25 0 0 1-.25.25H2a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 2 5.75h14a.25.25 0 0 1 .25.25z"></path>
      <path d="M13.5 12.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"></path>
    </svg>
  );
}
