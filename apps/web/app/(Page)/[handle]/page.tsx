import { notFound } from "next/navigation";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const { default: metadata } = await import(
    `@/content/page-metadata/${handle}.ts`
  );

  return {
    alternates: {
      canonical: `/blog/${handle}`,
    },
    description: metadata.description,
    title: metadata.title,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const { default: Content } = await import(
    `@/content/page/${handle}.mdx`
  ).catch(() => notFound());

  return (
    <main>
      <Content />
    </main>
  );
}
