// lib/actions/posts.ts

"use server";

import samplePosts from "@/lib/constants/sample-post.json";
import { revalidatePath } from "next/cache";

export async function readPostAction(): Promise<MyNextApp.Post[]> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(samplePosts);
			// console.log("use server@@@@");
		}, 2000);
	});
}

export async function readPostActionWithCache(): Promise<MyNextApp.Post[]> {
	return fetch("http://localhost:3000/api/posts", {
		cache: "force-cache",
	}).then((res) => res.json());
}

export async function resetCache() {
	revalidatePath("/feed", "page");
}
