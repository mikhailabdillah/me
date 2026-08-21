import {
  IconBrandDribbble,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";

const items = [
  {
    icon: <IconBrandFacebook />,
    id: "sid:001",
    label: "Facebook",
    url: "https://facebook.com/mikhailabdillahtr",
  },
  {
    icon: <IconBrandInstagram />,
    id: "sid:002",
    label: "Instagram",
    url: "https://www.instagram.com/mikhail_abdillah",
  },
  {
    icon: <IconBrandLinkedin />,
    id: "sid:003",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mikhail-abdillah-8b44b0110/",
  },
  {
    icon: <IconBrandDribbble />,
    id: "sid:004",
    label: "Dribbble",
    url: "https://dribbble.com/mikhailabdillah",
  },
  {
    icon: <IconBrandGithub />,
    id: "sid:005",
    label: "Dribbble",
    url: "https://github.com/mikhailabdillah",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4">
      {items.map((item) => (
        <Link
          className="flex h-14 items-center justify-center px-4"
          href={item.url}
          key={item.id}
          target="_blank"
        >
          {item.icon}
          <span className="sr-only">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
