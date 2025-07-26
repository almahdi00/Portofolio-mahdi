"use client";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiPhone, FiMapPin, FiArrowUp } from "react-icons/fi"; // Mengganti ikon lucide-react dengan react-icons
import { FaInstagram } from "react-icons/fa"; // Mengganti Instagram dari react-icons/fa
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 relative">
      {/* Gradient Border Top */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Projects", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-blue-500" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact" className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="mailto:muhammadalmahdi016@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors duration-300">
                <FiMail size={16} /> {/* Ikon diganti */}
                muhammadalmahdi016@gmail.com
              </a>
              <p className="flex items-center gap-2 text-sm">
                <FiPhone size={16} /> {/* Ikon diganti */}
                +62 895-1609-0870
              </p>
              <p className="flex items-center gap-2 text-sm">
                <FiMapPin size={16} /> {/* Ikon diganti */}
                Jakarta, Indonesia
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-400 transition-colors duration-300">
                  <FiSend size={16} /> {/* Ikon diganti */}
                </button>
              </div>
              {isSubscribed && (
                <p className="text-green-500 text-sm">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Muhammad Al Mahdi. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: FiGithub, href: "#https://github.com/almahdi00" },
                { icon: FiLinkedin, href: "#" },
                { icon: FaInstagram, href: "https://www.instagram.com/41_mhdi/" }, // Mengganti Instagram ke FaInstagram
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 right-4 p-2 bg-blue-500 rounded-full hover:bg-blue-400 transition-colors duration-300">
        <FiArrowUp size={20} /> {/* Ikon diganti */}
      </button>
    </footer>
  );
}

export default Footer;
