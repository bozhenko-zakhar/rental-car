import { Manrope } from "next/font/google";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import Header from "@/componenets/Header/Header";
import TanStackProvider from "@/componenets/TanStackProvider/TanStackProvider";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700",],
  variable: "--font-family",
  display: "swap",
});


export const metadata: Metadata = {
  title: "RentalCar"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
			<body className={manrope.variable}>
				<TanStackProvider>
					<Header />
					{children}
				</TanStackProvider>

				<Toaster
          position="top-right"
          toastOptions={{
            duration: 10000,
            style: {
              fontFamily: "var(--font-family)",
							fontSize: "16px",
							fontWeight: "500"
            },
          }}
        />
			</body>
    </html>
  );
}
