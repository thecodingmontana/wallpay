import MyWalletHeader from '@/components/my-wallet/MyWalletHeader';
import React from 'react'

export default function MyWalletLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <MyWalletHeader />
        { children}
    </div>
  )
}
