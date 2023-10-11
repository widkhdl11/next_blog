import { allPosts } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import { NextPage } from "next";
import Image from "next/image";

interface PostLayoutProps {
  params: { slug: string };
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));

// 메타데이타
export const generateMetadata = ({ params }: PostLayoutProps) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "website",
      url: post.url,
      title: post.title,
      description: post.description,
      images: [
        post.thumbnail ? `/images/${post.thumbnail}` : "/images/owl.png",
      ],
    },
    twitter: {
      type: "summary_large_image",
      url: post.url,
      title: post.title,
      description: post.description,
      images: [
        post.thumbnail ? `/images/${post.thumbnail}` : "/images/owl.png",
      ],
    },
  };
};

const PostLayout: NextPage<PostLayoutProps> = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="min-h-screen mx-2">
      {post.thumbnail && (
        <div className="relative h-60 md:h-96">
          <Image
            className="absolute"
            src={`/images/${post.thumbnail}`}
            alt={post.title}
            fill
            objectFit="cover"
          />
        </div>
      )}
      <div>
        <h1 className="text-center pt-8 mb-4 md:mb-8 text-xl  md:text-4xl font-semibold">
          {post.title}
        </h1>
        <div className="text-right text-gray-500 md:text-xl mx-2">
          <time datatype={post.date}>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
      </div>
      <div
        className="mt-8 text-lg break-words [&>ol>li]:mt-4 [&>ol>li>p>strong]:text-2xl [&>h3]:mt-8 [&>h3]:text-3xl [&>h3]:font-semibold [&>h3:last-child]:pb-12"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
};

export default PostLayout;
