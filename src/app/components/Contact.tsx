"use client";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Send,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
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
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
            <p className="text-sm leading-relaxed">
              Saya adalah seorang pemula di dunia pemrograman yang antusias
              untuk terus belajar dan berkembang. Meskipun baru memulai
              perjalanan ini, saya sudah memiliki dasar dalam beberapa bahasa
              pemrograman dan konsep pengembangan web. Saya senang
              mengeksplorasi teknologi baru dan mencari tantangan yang dapat
              membantu saya meningkatkan keterampilan saya. Dengan semangat
              belajar yang tinggi, saya berkomitmen untuk menguasai lebih banyak
              keterampilan teknis dan terus memperbaiki diri sebagai pengembang
              yang lebih baik setiap hari.
            </p>
          </div>

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
                <Mail size={16} />
                muhammadalmahdi016@gmail.com
              </a>
              <p className="flex items-center gap-2 text-sm">
                <Phone size={16} />
                +62 XXX-XXXX-XXXX
              </p>
              <p className="flex items-center gap-2 text-sm">
                <MapPin size={16} />
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
                  <Send size={16} />
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
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
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
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}

export default Footer;
