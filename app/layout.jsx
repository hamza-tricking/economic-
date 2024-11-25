import "../styles/globals.css";
import "../styles/navbar.css";
import Navbar from "../component/navbar";

export const metadata = {
  title: "E-Commerce Platform",
  description: "Your one-stop e-commerce platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
