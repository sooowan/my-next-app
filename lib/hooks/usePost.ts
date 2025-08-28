// lib/hooks/userPost.ts

import useSWR from "swr";
import fetcher from "../fetcher";

export default function usePost(postId: string) {
	const { isLoading, data, error, mutate } = useSWR<MyNextApp.Post>(
		`/api/posts/${postId}`,
		fetcher
	);
	// console.log(postId + "load!!!");
	return {
		isLoading,
		data,
		error,
		mutate,
	};
}
