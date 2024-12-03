import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Property Pulse",
  keywords: "rental, property, real estate",
  description: "Find  the perfect rental property",
};
export default function MainLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
