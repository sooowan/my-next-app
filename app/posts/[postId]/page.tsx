// app/posts/[postId]/page.tsx

import PostFragment from "@/components/PostFragment";
import { Metadata } from "next";
import samplePosts from "@/lib/constants/sample-post.json";
import { notFound } from "next/navigation";

interface PageProps {
	params: Promise<{ postId: string }>;
}

async function PostItemPage({ params }: PageProps) {
	// const { params } = props;
	const { postId } = await params;
	const post = samplePosts.find((sp) => sp.id === postId);
	if (!post) {
		notFound();
	}
	return (
		<div className="box page">
			<p>Intercpted PostItem Page {postId}</p>
			<PostFragment data={post} />
		</div>
	);
}

export default PostItemPage;

export async function generateMetadata(props: PageProps): Promise<Metadata> {
	const { params } = props;
	const { postId } = await params;

	return {
		title: `Title (PostID: ${postId})`,
		description: `Description (About PostID: ${postId}) `,
	};
}
