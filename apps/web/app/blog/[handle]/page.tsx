import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const { default: metadata } = await import(
    `@/content/blog-metadata/${handle}.ts`
  );

  return {
    alternates: {
      canonical: `/blog/${handle}`,
    },
    description: metadata.description,
    title: metadata.title,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const { default: Post } = await import(`@/content/blog/${handle}.mdx`);
  return (
    <main>
      <div className="container mx-auto max-w-4xl px-4 py-24">
        <Post />
      </div>
    </main>
  );
}
