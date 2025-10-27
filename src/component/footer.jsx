import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Dribbble,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import SignText from "./signText";

export default function Footer() {
  const footerLinks = [
    {
      category: "Product",
      links: [
        { name: "RFI Management", href: "#" },
        { name: "Document Control", href: "#" },
        { name: "Communications", href: "#" },
        { name: "Claims Prevention", href: "#" },
        { name: "AI Engine", href: "#" },
      ],
    },
    {
      category: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "News", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      category: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Training", href: "#" },
        { name: "Status", href: "#" },
      ],
    },
    {
      category: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Data Protection", href: "#" },
      ],
    },
  ];

  return (
    <>
      <footer className="bg-[#1C1C1E] text-[#D1D5DC] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top section */}
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Company info */}
            <div className="space-y-6 xl:col-span-1">
              <div className="logo">
                <Image
                  src="/images/logo-white.png"
                  alt="Logo"
                  width={110}
                  height={23}
                />
              </div>
              <p className="text-sm mt-5">
                The operational intelligence platform for construction.
                Preventing disputes, eliminating delays, accelerating delivery.
              </p>
              <div className="flex space-x-5 mt-8">
                <a href="#" className="hover:text-white transition text-sm">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition text-sm">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition text-sm">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2 md:grid-cols-4">
              {footerLinks.map((section) => (
                <div key={section.category}>
                  <h3 className="text-base font-medium uppercase tracking-wider">
                    {section.category}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="hover:text-white transition text-sm text-[#D1D5DC]">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-sm text-[#D1D5DC]/80">
            <p>&copy; 2025 Baselinq. All rights reserved.</p>
            <p className="mt-4 sm:mt-0">
              Built with intelligence for construction.
            </p>
          </div>
        </div>
      </footer>
      <SignText />
    </>
  );
}
