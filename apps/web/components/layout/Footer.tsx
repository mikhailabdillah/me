import { IconHeartFilled } from "@tabler/icons-react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gray-800 py-6 text-white">
      <div className="container mx-auto px-4 py-10">
        <p className="mb-6 text-center">
          Made with{" "}
          <IconHeartFilled className="inline-block size-5 fill-pink-600" /> by
          Mikhail Abdillah | Powered by{" "}
          <a
            className="text-white/80 underline underline-offset-2 hover:text-white"
            href="https://vercel.com"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Vercel
          </a>
        </p>
        {/* <SocialLink /> */}
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
