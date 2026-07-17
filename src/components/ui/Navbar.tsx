"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",  href: "/" },
  { label: "Man",   href: "/man" },
  { label: "Woman", href: "/woman" },
  { label: "Kids",  href: "/kids" },
  { label: "Sale",  href: "/sale" },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-0 z-50 bg-navbar-bg">
      <nav className="w-full px-8 h-16 flex items-center justify-between">

        <Link href="/" id="navbar-logo" aria-label="Jordan home" className="flex flex-col items-center gap-0.5">
          <Image src="/jordan-logo.png" alt="Jordan Jumpman logo" width={42} height={42} />
          <span className="text-[9px] font-bold uppercase tracking-widest leading-none text-navbar-logo-text">
            Jordan
          </span>
        </Link>

        <ul className="flex items-center gap-10" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={label}>
                <Link
                  href={href}
                  id={`nav-link-${label.toLowerCase()}`}
                  className={`
                    relative text-xs font-semibold uppercase tracking-[0.2em]
                    transition-colors duration-200
                    ${isActive ? "text-navbar-link-active" : "text-navbar-link hover:text-navbar-link-active"}
                  `}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-navbar-link-active" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-5">
          <button id="navbar-search" aria-label="Search" className="text-navbar-icon hover:text-white transition-colors duration-200">
            <Search size={20} strokeWidth={1.75} />
          </button>
          <button id="navbar-cart" aria-label="Cart" className="text-navbar-icon hover:text-white transition-colors duration-200">
            <ShoppingCart size={20} strokeWidth={1.75} />
          </button>
          <button
            id="navbar-account"
            aria-label="Account"
            className="w-9 h-9 rounded-full overflow-hidden bg-navbar-avatar-bg"
          >
            <Image src="/avatar.png" alt="User avatar" width={36} height={36} className="object-cover" />
          </button>
        </div>

      </nav>
    </header>
  );
}
