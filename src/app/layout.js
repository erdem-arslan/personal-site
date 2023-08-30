import './globals.css'
export const metadata = {
  title: "I'm Erdem",
  description: 'This My Blog',
}

export default function RootLayout({ children })
{
  return (
    <html lang="en">
      <body className='bg-default-bg'>{children}</body>
    </html>
  )
}
