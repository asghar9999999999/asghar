import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Dynamic Blog",
  description: "Explore the latest tech trends and insights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
