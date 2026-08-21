"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { cx } from "class-variance-authority";
import Image from "next/image";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

// import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  return (
    <header>
      <nav aria-label="Main Navigation">
        <div className={"container mx-auto h-20 px-4 py-2"}>
          <div className="grid h-full grid-cols-2 items-center justify-center md:grid-cols-3">
            <Link href={"/"}>
              <Image
                alt="Mikhail Abdillah"
                className="size-14"
                height={128}
                src={"/logo.png"}
                width={128}
              />
            </Link>
            <div className="hidden text-center md:block">
              <Menu />
            </div>
            <div className="ml-auto text-right">
              <Button
                className="hidden md:inline-flex"
                nativeButton={false}
                render={<Link href={"mailto:hello@mikhail-abdillah.com"} />}
              >
                Hire me
                <IconArrowNarrowRight className="ml-2" />
              </Button>
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const menus = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/project",
    label: "Project",
  },
];

export const Menu = () => {
  return (
    <ul className="flex list-none flex-col items-center justify-center p-0 md:flex-row">
      {menus.map((menu) => (
        <li
          className="flex w-full items-center not-last:after:text-gray-400 md:w-auto md:not-last:after:mx-4 md:not-last:after:content-['/']"
          key={menu.label}
        >
          <MenuLink href={menu.href}>{menu.label}</MenuLink>
        </li>
      ))}
    </ul>
  );
};

const MenuLink = ({
  href,
  children,
}: LinkProps & { children?: React.ReactNode }) => {
  const pathName = usePathname();

  return (
    <Link
      aria-current={pathName === href ? "page" : undefined}
      className={cx(
        "block w-full py-4 text-center text-2xl transition-all duration-200 hover:text-blue-500 md:py-2 md:text-base",
        pathName === href ? "text-blue-500" : "text-gray-600"
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Navbar;
