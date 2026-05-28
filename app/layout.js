import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import SyncUser from "@/components/SyncUser";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Devora",
  description: "A modern blogging platform. ",
  icons: {
    icon: "/img/favicon.svg",
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
        suppressHydrationWarning
      >
        <body className={`min-h-full flex flex-col ${poppins.variable}`}>
          <Providers>
            <SyncUser />
            {children}

            <Toaster
              position="top-right"
              richColors
              expand
              visibleToasts={3}
              closeButton
              toastOptions={{
                classNames: {
                  toast:
                    "rounded-2xl border border-border bg-card text-foreground",
                },
              }}
            />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
