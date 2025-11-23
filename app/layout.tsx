import '/public/static/css/main.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'LumoraClear',
  description: 'Your site description here',
  icons: {
    icon: '/static/images/lumoraclear.ico',
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
