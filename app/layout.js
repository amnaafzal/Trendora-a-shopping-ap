import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "remixicon/fonts/remixicon.css";
import Providers from "./Providers";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick the weights you need
  variable: "--font-montserrat",        // creates a CSS variable
});



export const metadata = {
  title: "Trendora- a shopping app",
  description: "An e-commerce website",

  icons: {
    icon: "/fav-icon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>

      </body>
    </html>
  );
}
