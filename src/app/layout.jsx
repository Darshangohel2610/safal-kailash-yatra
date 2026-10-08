import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Safal Kailash Yatra | Sacred Adi Kailash & Om Parvat Journey",
  description:
    "Safal Kailash Yatra offers a thoughtfully planned Himalayan pilgrimage covering Adi Kailash, Parvati Kund, Om Parvat Darshan, and Kumaon valleys.",
  icons: {
    icon: [{ url: "/logo.png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body
        className="min-h-screen bg-background text-heading flex flex-col font-sans selection:bg-primary selection:text-white antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
