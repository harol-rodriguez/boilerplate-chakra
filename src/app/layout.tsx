import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/shared/styles/globals.css"
import { ThemeProvider } from '@/shared/providers/theme-provider';
import QueryProviders from '@/shared/providers/query-provider';
import MainNavBar from "@/components/MainNavBar";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next app 14",
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().get("session-token");

  return (
    <html lang="en">
      <body style={{margin: '0 !important'}}>
        <QueryProviders>
          <ThemeProvider>{children}</ThemeProvider>
        </QueryProviders>
      </body>
    </html>
  )
}