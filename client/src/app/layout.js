import './globals.css'

export const metadata = {
  title: 'Rezy',
  description: 'Reselling Made Easy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-emerald-50">{children}</body>
    </html>
  );
}
