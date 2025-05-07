import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
