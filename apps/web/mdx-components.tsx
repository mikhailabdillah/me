import Image, { type ImageProps } from "next/image";

export default function CustomLink(props: React.ComponentProps<"a">) {
  const { href } = props;
  const isInternal = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternal) {
    return <a {...props} />;
  }

  return <a rel="noopener noreferrer" target="_blank" {...props} />;
}

import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  a: (props) => CustomLink(props),
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ height: "auto", width: "100%" }}
      {...(props as ImageProps)}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
