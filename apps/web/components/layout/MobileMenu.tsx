import { IconArrowNarrowUp, IconMenu3, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "./Navbar";
import SocialLinks from "./SocialLinks";

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <>
      <Button className="px-3 md:hidden" onClick={handleOpen} title="Open Menu">
        <IconMenu3 className="size-6" />
      </Button>
      <div
        className="fixed h-full w-full bg-white transition-all duration-500"
        style={{
          opacity: isOpen ? 1 : 0,
          right: 0,
          top: 0,
          visibility: isOpen ? "visible" : "hidden",
          zIndex: 100,
        }}
      >
        <Button
          className="absolute top-4 right-4 z-50 h-12 w-12 rounded-full bg-destructive/80 text-white"
          onClick={handleClose}
          title="Close Menu"
        >
          <IconX className="size-6" />
        </Button>
        <div className="pt-20 pb-4 text-center">
          <Menu />
          <Button
            className="mt-6 text-lg"
            nativeButton={false}
            render={<Link href={"mailto:hello@mikhail-abdillah.com"} />}
            size={"lg"}
          >
            Hire me
            <IconArrowNarrowUp className="ml-2" size={"16"} />
          </Button>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
