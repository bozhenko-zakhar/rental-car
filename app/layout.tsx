import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/componenets/Header/Header";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-family",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--second-family",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
			<body className={`${manrope.variable} ${inter.variable}`}>
				<Header />
				{children}
			</body>
    </html>
  );
}
