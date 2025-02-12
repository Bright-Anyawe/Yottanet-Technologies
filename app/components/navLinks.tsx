"use client";

import {
  PhoneIcon,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Define the navigation links and their icons
const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "About", href: "/pages/about", icon: UserIcon },
  { name: "Services", href: "/pages/services", icon: BriefcaseIcon },
  { name: "Shop", href: "/pages/shop", icon: BriefcaseIcon },
  { name: "Contact", href: "/pages/contact", icon: PhoneIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2",
              {
                "bg-sky-100 text-blue-600": pathname === link.href
              }
            )}
          >
            <LinkIcon className="w-6 h-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
