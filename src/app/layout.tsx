import './globals.css'

export const metadata = {
  title: 'ArenaPay',
  description: 'The Revolut for Pro Gamers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
