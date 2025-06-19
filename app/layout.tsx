import type { Metadata } from 'next'
import './globals.css'
import { Lora } from "next/font/google";




const lora = Lora({ subsets: ["latin"],weight:'400',display:'swap', });


export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        {children}
        </body>
    </html>
  )
}
