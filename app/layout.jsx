import { Crimson_Pro, Public_Sans } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

const publicsans = Public_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr. Enrique Mercadal Calaf",
  description: "Cardiologo clinico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${crimsonPro.variable} ${publicsans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
