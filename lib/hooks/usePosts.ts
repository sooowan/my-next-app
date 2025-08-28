// lib/hooks/userPosts.ts

import useSWR from "swr";
import fetcher from "../fetcher";

export default function usePosts() {
	const { isLoading, data, error, mutate } = useSWR<MyNextApp.Post[]>(
		"/api/posts",
		fetcher,
		{
			refreshInterval: 5000,
		}
	);
	return {
		isLoading,
		posts: data,
		error,
		mutate,
	};
}
