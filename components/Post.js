import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      {/* 動的に変わるidを取得し、そのidを付与したURLに遷移する */}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
};

export default Post;
