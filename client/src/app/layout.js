import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  title: 'Rezy',
  description: 'Reselling Made Easy',
}
