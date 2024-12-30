import './globals.css'

export const metadata = {
  title: 'Rezy',
  description: 'Reselling Made Easy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-emerald-50">{children}</body>
    </html>
  );
}
