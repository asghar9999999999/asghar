// const Footer = () => (
//   <footer className="bg-gray-900 text-white text-center p-4">
//     <p>&copy; Ali Asghar | Dynamic Blog 2024</p>
//   </footer>
// );

// export default Footer;
// app/components/Footer.tsx
// app/components/Footer.tsx
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10">
//       <div className="container mx-auto px-4">
//         {/* Top Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
//           {/* Logo or Website Name */}
//           <div className="text-2xl font-bold text-white mb-6 md:mb-0 md:text-left text-center">
//             Technolgy FAB
//           </div>

//           {/* Navigation Links */}
//           <div className="flex gap-8 text-sm md:justify-end justify-center flex-wrap">
//             <Link href="/" className="hover:text-white">
//               Home
//             </Link>
//             <Link href="/about" className="hover:text-white">
//               About
//             </Link>
//             <Link href="/privacy-policy" className="hover:text-white">
//               Privacy Policy
//             </Link>
//             <Link href="/contact" className="hover:text-white">
//               Contact
//             </Link>
//           </div>
//         </div>

//         {/* Middle Section - Social Media and Categories */}
//         <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-8">
//           {/* Social Media Links */}
//           <div className="flex gap-6 justify-center lg:justify-start">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white transition"
//             >
//               <i className="fab fa-facebook"></i> Facebook
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white transition"
//             >
//               <i className="fab fa-twitter"></i> Twitter
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white transition"
//             >
//               <i className="fab fa-instagram"></i> Instagram
//             </a>
//           </div>

//           {/* Categories */}
//           <div className="flex gap-6 justify-center lg:justify-end flex-wrap">
//             <Link
//               href="/category/technology"
//               className="text-gray-400 hover:text-white"
//             >
//               AI
//             </Link>
//             <Link
//               href="/category/blockchain"
//               className="text-gray-400 hover:text-white"
//             >
//               Blockchain
//             </Link>
//             <Link
//               href="/category/web3"
//               className="text-gray-400 hover:text-white"
//             >
//               Web3
//             </Link>
//             <Link
//               href="/category/cybersecurity"
//               className="text-gray-400 hover:text-white"
//             >
//               Cybersecurity
//             </Link>
//             <Link
//               href="/category/cybersecurity"
//               className="text-gray-400 hover:text-white"
//             >
//               Metaverse
//             </Link>{" "}
//             <Link
//               href="/category/cybersecurity"
//               className="text-gray-400 hover:text-white"
//             >
//               5G Connectivity
//             </Link>{" "}
//             <Link
//               href="/category/cybersecurity"
//               className="text-gray-400 hover:text-white"
//             >
//               Quantum Computing
//             </Link>{" "}
//             <Link
//               href="/category/cybersecurity"
//               className="text-gray-400 hover:text-white"
//             >
//               Autonomous Vehicles
//             </Link>{" "}
//             <Link
//               href="/category/cybersecurity"
//               className="text-gray-400 hover:text-white"
//             >
//               Job Markets
//             </Link>{" "}
//             <Link
//               href="/category/cybersecurity"
//               className="text-gray-400 hover:text-white"
//             >
//               Sustainable Technology
//             </Link>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="text-center text-sm">
//           © Ali Asghar | Dynamic Blog 2024 |{" "}
//           <Link href="/privacy-policy" className="hover:text-white">
//             Privacy Policy
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          {/* Logo or Website Name */}
          <div className="text-2xl font-bold text-white mb-6 md:mb-0 md:text-left text-center">
            Technology FAB
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8 text-sm md:justify-end justify-center flex-wrap">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Middle Section - Social Links & Categories */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-6">
          {/* Social Media Links */}
          <div className="flex flex-col lg:w-1/2 gap-4">
            <div className="text-lg font-semibold text-white">Follow Us</div>
            <div className="flex gap-6 justify-start">
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
          </div>

          {/* Categories Columns */}
          <div className="grid grid-cols-3 gap-8 w-full">
            <div className="flex flex-col gap-2">
              <Link
                href="/category/technology"
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
                href="/category/finance"
                className="text-gray-400 hover:text-white"
              >
                Web3
              </Link>
              <Link
                href="/category/job-markets"
                className="text-gray-400 hover:text-white"
              >
                Job Market
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/category/cybersecurity"
                className="text-gray-400 hover:text-white"
              >
                Cybersecurity
              </Link>
              <Link
                href="/category/virtual-reality"
                className="text-gray-400 hover:text-white"
              >
                Metaverse
              </Link>
              <Link
                href="/category/5g"
                className="text-gray-400 hover:text-white"
              >
                5G Connectivity
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/category/quantum-computing"
                className="text-gray-400 hover:text-white"
              >
                Quantum Computing
              </Link>
              <Link
                href="/category/autonomous-vehicles"
                className="text-gray-400 hover:text-white"
              >
                Autonomous Vehicles
              </Link>
              <Link
                href="/category/sustainable-tech"
                className="text-gray-400 hover:text-white"
              >
                Sustainable Technology
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20">
          <div className="text-center text-sm flex flex-col md:flex-row justify-center items-center gap-2">
            <div>© Ali Asghar | Dynamic Blog 2024</div>
          </div>
        </div>

        <div className="mt-0">
          {/* {" "} */}
          <Link
            href="/privacy-policy"
            className="hover:text-white flex gap-6 justify-end"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
