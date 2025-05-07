import Header from "@/layouts/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header>
        {children}
      </Header>
      </body>
    </html>
  );
}
