import "../app/styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";



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
