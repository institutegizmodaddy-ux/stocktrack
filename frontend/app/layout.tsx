import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StockTrack - iPhone Service Center Management',
  description: 'Professional CRM for iPhone repair centers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-light text-primary">{children}</body>
    </html>
  )
}
