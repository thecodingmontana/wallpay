"use client";

import BankDetailsTabs from "./BankDetailsTabs";

interface BankDetailsWrapperProps {
  walletId: string;
}

export default function BankDetailsWrapper({}: BankDetailsWrapperProps) {
  return (
    <div>
      <BankDetailsTabs />
    </div>
  );
}
