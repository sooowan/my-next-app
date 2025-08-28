// components/PostFragment.tsx

// "use client";

// import usePost from "@/lib/hooks/usePost";

import Image from "next/image";
interface PostFragmentProps {
	data: MyNextApp.Post;
}

export default function PostFragment(props: PostFragmentProps) {
	const { data } = props;
	// const { isLoading, data, error, mutate } = usePost(postId);

	// if (isLoading || !data) {
	// 	return <div>Loading...</div>;
	// }
	// if (error) {
	// 	return <div>ERROR!!</div>;
	// }
	return (
		<div>
			<Image
				src={data.image}
				alt="post image"
				width={240}
				height={240}
				priority
				className="w-[240] he-[240] object-cover"
			/>
			<h3>{data.title}</h3>
			<p>{data.content}</p>
		</div>
	);
}
