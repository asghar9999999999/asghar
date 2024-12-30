// const Footer = () => (
//   <footer className="bg-gray-900 text-white text-center p-4">
//     <p>&copy; Ali Asghar | Dynamic Blog 2024</p>
//   </footer>
// );

// export default Footer;
// app/components/Footer.tsx
// app/components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          {/* Logo or Website Name */}
          <div className="text-2xl font-bold text-white mb-6 md:mb-0 md:text-left text-center">
            Technolgy FAB
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8 text-sm md:justify-end justify-center flex-wrap">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Middle Section - Social Media and Categories */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-8">
          {/* Social Media Links */}
          <div className="flex gap-6 justify-center lg:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>

          {/* Categories */}
          <div className="flex gap-6 justify-center lg:justify-end flex-wrap">
            <Link
              href="/category/ai"
              className="text-gray-400 hover:text-white"
            >
              AI
            </Link>
            <Link
              href="/category/blockchain"
              className="text-gray-400 hover:text-white"
            >
              Blockchain
            </Link>
            <Link
              href="/category/web3"
              className="text-gray-400 hover:text-white"
            >
              Web3
            </Link>
            <Link
              href="/category/cybersecurity"
              className="text-gray-400 hover:text-white"
            >
              Cybersecurity
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm">
          © 2024 TechBlog. All Rights Reserved. |{" "}
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
