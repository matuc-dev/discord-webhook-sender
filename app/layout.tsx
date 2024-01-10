import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const gfont = Poppins({ weight: "500", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebhookSender',
  description: 'Powered by Matu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gfont.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
