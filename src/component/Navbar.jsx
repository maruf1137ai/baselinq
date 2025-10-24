import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const NavLinks = [
  { href: "/product", label: "Product" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="  bg-white">
      <div className="container flex items-center justify-between  mx-auto py-4 px-4">
        <Link href="/" className="h-[27px]">
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        </Link>
        {/* Menu */}
        <ul className="flex space-x-11 text-sm ">
          {NavLinks.map((link) => (
            <li key={link.href}>
              <Link
                className="text-black-light text-base duration-200 hover:opacity-100"
                href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* CTA Button */}
        <div className="flex items-center">
          <Button href="#" title="Book a Demo" />
          {/* <Button href="#" title="See AI in Action" /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
