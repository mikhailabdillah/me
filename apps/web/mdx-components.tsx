import Image, { type ImageProps } from "next/image";

import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
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
