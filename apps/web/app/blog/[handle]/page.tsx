export default async function BlogPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const { default: Post } = await import(`@/content/blog/${handle}.mdx`);
  return (
    <main>
      <Post />
    </main>
  );
}
