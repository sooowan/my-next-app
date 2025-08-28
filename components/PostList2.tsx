// components/PostList.tsx

"use client";

// import { use } from "react";
import Link from "next/link";
import usePosts from "@/lib/hooks/usePosts";

interface PostListProps {
	// postPromise: Promise<MyNextApp.Post[]>;
	onRefresh: boolean;
}

export default function PostList2() {
	// const { postPromise } = props;
	// const { onRefresh } = props;

	const { isLoading, posts, error, mutate } = usePosts();
	if (isLoading || !posts) {
		return <div>Loading...!!!</div>;
	}
	if (error) {
		return <div>ERROR!!</div>;
	}
	// if (onRefresh) {
	// 	mutate();
	// 	console.log("mutate@@");
	// }

	return (
		<ul>
			{posts.map((post, index) => {
				return (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				);
			})}
		</ul>
	);
}
