export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [
    { slug: "aberdeen-internship" },
    { slug: "leitlearn-x-hyperid-announcement" },
  ];
}

export const dynamicParams = false;
