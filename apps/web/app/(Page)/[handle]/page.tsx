export default async function Page({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const { default: Content } = await import(`@/content/page/${handle}.mdx`);
  return (
    <main>
      <Content />
    </main>
  );
}
