// components/PostList.tsx

"use client";

import { use } from "react";
// import Link from "next/link";
import dynamic from "next/dynamic";
const PostListItem = dynamic(() => import("@/components/PostListItem"), {
	ssr: false,
	loading: () => <div>Loading###</div>,
});

interface PostListProps {
	postPromise: Promise<MyNextApp.Post[]>;
}

export default function PostList(props: PostListProps) {
	const { postPromise } = props;
	const posts = use(postPromise);

	return (
		<ul>
			{posts.map((post) => {
				return (
					<li key={post.id}>
						<PostListItem post={post} />
						{/* <Link href={`/posts/${post.id}`}>{post.title}</Link> */}
					</li>
				);
			})}
		</ul>
	);
}
