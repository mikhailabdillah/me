import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-8 md:flex-nowrap">
          <div className="basis-full md:basis-1/2">
            <h1 className="text-5xl">Hey, I&apos;m Mikhail!</h1>
            <p className="mb-6 text-2xl text-blue-500">Full-stack Developer</p>
            <p className="mb-6 text-gray-400 text-lg">
              I specialize in developing high-performance, accessible web
              applications that balance technical excellence with intuitive
              design. Beyond the screen, I am an avid reader, film enthusiast,
              and gamer.
            </p>
            <Button
              nativeButton={false}
              render={
                <Link
                  className=""
                  href={"mailto:hello@mikhail-abdillah.com"}
                  title={"Hire me"}
                />
              }
            >
              <span>Hire me</span>
              <IconArrowNarrowRight />
            </Button>
            <div className="mt-8 flex flex-wrap gap-3">
              <Image
                alt="React.js"
                height={32}
                src={"/React.png"}
                title="React.js"
                width={32}
              />
              <Image
                alt="Next.js"
                height={32}
                src={"/nextjs.png"}
                title="Next.js"
                width={32}
              />
              <Image
                alt="Node.js"
                height={32}
                src={"/Node.png"}
                title="Node.js"
                width={32}
              />
              <Image
                alt="Go language"
                height={32}
                src={"/Go.png"}
                title="Go language"
                width={32}
              />
              <Image
                alt="TypeScript"
                height={32}
                src={"/TypeScript.png"}
                title="TypeScript"
                width={32}
              />
              <Image
                alt="Shopify"
                height={32}
                src={"/shopify.png"}
                title="Shopify"
                width={32}
              />
              <Image
                alt="GraphQL"
                height={32}
                src={"/GraphQL.png"}
                title="GraphQL"
                width={32}
              />
              <Image
                alt="Figma"
                height={32}
                src={"/figma.png"}
                title="Figma"
                width={32}
              />
            </div>
          </div>
          <div className="basis-full md:basis-1/2">
            <div className="mx-auto max-w-sm py-6">
              <Image
                alt="Mikhail Abdillah"
                className=""
                height={1080}
                preload
                src={"https://ik.imagekit.io/0bihy1yf6/_Mikhail/profile.jpg"}
                width={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
