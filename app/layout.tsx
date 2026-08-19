import { Montserrat } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils";
import { Footer } from "../components/funzo/footer";
import { Nav } from "@/components/funzo/Nav";


const montserrat = Montserrat({subsets:['latin'],variable:'--font-mono'})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", montserrat.variable, "font-mono", )}
    >
      <body>
        <Nav/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
