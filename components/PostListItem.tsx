import Link from "next/link";

interface PostListItemProps {
	post: MyNextApp.Post;
}

export default function PostListItem(props: PostListItemProps) {
	const { post } = props;
	return <Link href={`/posts/${post.id}`}>{post.title}</Link>;
}
