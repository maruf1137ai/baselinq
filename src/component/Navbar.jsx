"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // for hamburger icons
import Button from "./Button"; // assuming your Button component exists

const NavLinks = [
  { href: "/product", label: "Product" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-[9999] shadow-sm">
      <div className="container flex items-center justify-between mx-auto py-4 px-4">
        {/* Logo */}
        <Link href="/" className="h-[27px]">
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-11 text-sm">
          {NavLinks.map((link) => (
            <li key={link.href}>
              <Link
                className="text-black text-base duration-200 hover:opacity-100 hover:text-gray-800"
                href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:flex items-center">
          <Button href="#" title="Book a Demo" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-black cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-[50%] bg-white shadow-lg z-[9998] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col p-6 space-y-6">
          {/* Close Button */}
          <div className="flex justify-between items-center">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
            </Link>
            <button onClick={() => setIsOpen(false)} className="cursor-pointer">
              <X size={24} />
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col space-y-4 mt-4">
            {NavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-black text-lg font-medium"
                  onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button (Mobile) */}
          <div className="pt-4">
            <Button href="#" title="Book a Demo" />
          </div>
        </div>
      </div>

      {/* Background Overlay (click to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-[9997]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
