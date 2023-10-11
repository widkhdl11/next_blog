import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

interface PostCardProps {
  post: Post;
  index: number;
}

const PostCard: FC<PostCardProps> = ({ post, index }) => {
  return (
    <li
      className={`mx-4 mt-8 md:mt-12 shadow-md rounded-xl hover:opacity-70 ${
        index % 2 ? "shadow-d-purple" : "shadow-d-green"
      }`}
    >
      <Link
        href={post.url}
        className="flex flex-col md:flex-row md:items-center md:gap-4"
      >
        <div className="relative w-full h-60 md:w-48 md:h-48 md:shrink-0">
          <Image
            className="absolute rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
            src={`${
              post.thumbnail ? "/images/" + post.thumbnail : "/images/owl.png"
            }`}
            alt={post.title}
            fill
            objectFit="cover"
          />
        </div>
        <div className="p-4 md:pb-0 md:w-[544px]">
          <h2 className="truncate mb-4 text-xl md:text-2xl font-semibold">
            {post.title}
          </h2>
          <time className="text-gray-500 md:text-base" dateTime={post.date}>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <div className="truncate mt-4">{post.description}</div>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
