import Image from "next/image";
import Link from "next/link";
import items from "@/content/blogs.json";

const Blog = () => {
  return (
    <section>
      <h1 className="mb-12 text-center">My Blog</h1>
      <div className="flex flex-row flex-wrap gap-6">
        {items.map(async (item) => {
          const { default: data } = await import(
            `@/content/blog-metadata/${item.handle}.ts`
          );
          return (
            <div className="basis-full md:basis-1/2 lg:basis-1/3" key={item.id}>
              <Link
                className="no-underline! block"
                href={`/blog/${item.handle}`}
              >
                <Image
                  alt={data.image.altText || ""}
                  className="size-full object-cover ring-2 ring-accent"
                  height={400}
                  src={data.image.url}
                  width={600}
                />
                <h5 className="mt-6 text-neutral-800">{data.title}</h5>
                <p className="text-neutral-500">{data.description}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
