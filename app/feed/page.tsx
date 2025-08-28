// app/feed/page.tsx

// "use client";

// import { Suspense } from "react";
// import PostList from "@/components/PostList";
// import { useState, useEffect } from "react";
import PostList2 from "@/components/PostList2";
// import {
// 	// readPostAction,
// 	readPostActionWithCache,
// 	resetCache,
// } from "@/lib/actions/posts";

export default function FeedPage() {
	// const postPromise = readPostAction();
	// const posts = readPostActionWithCache();
	// const [posts, setPosts] = useState<Promise<MyNextApp.Post[]>>(
	// 	Promise.resolve([])
	// 	// new Promise((resolve) => {
	// 	// 	resolve([]);
	// 	// })
	// );
	// useEffect(() => {
	// 	setPosts(readPostActionWithCache());
	// 	// async function fetchPosts() {
	// 	// 	const posts = await ;
	// 	// }
	// 	// fetchPosts();
	// }, []);

	return (
		<div className="box page">
			{/* <button
				type="button"
				className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white opacity-100 focus:outline-none hover:bg-fuchsia-500 mb-2"
				onClick={resetCache}
			>
				reset cache
			</button> */}
			<div>
				{/* <Suspense fallback={<div>Loading...</div>}>
						<PostList postPromise={postPromise} />
					</Suspense> */}
				{/* <Suspense fallback={<div>Loading...</div>}>
					<PostList postPromise={posts} />
				</Suspense> */}

				<PostList2 />
			</div>
		</div>
	);
}

// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function FeedPage() {
// 	const [posts, setPosts] = useState<MyNextApp.Post[]>([]);

// 	useEffect(() => {
// 		async function fetchPosts() {
// 			try {
// 				const result = await fetch("/api/posts");
// 				const data = await result.json();
// 				setPosts(data);
// 			} catch (e) {
// 				console.log(e);
// 			}
// 		}
// 		fetchPosts();
// 	}, []);
// 	return (
// 		<div className="box page">
// 			<h4>Page</h4>
// 			<ul>
// 				{posts.map((post, index) => {
// 					return (
// 						<li key={post.id}>
// 							<Link href={`/posts/${post.id}`}>{post.title}</Link>
// 						</li>
// 					);
// 				})}
// 			</ul>
// 		</div>
// 	);
// }

// Promise.resolve(Promise.reject(1))
// 	.then((value) => console.log("Resolved:W", value))
// 	.catch((error) => console.error("Rejected:W", error));

// Promise.reject(Promise.resolve(111))
// 	.then((value) => console.log("Resolved:F", value))
// 	.catch((error) => console.error("Rejected:F", error));

// Promise.resolve(Promise.resolve(900))
// 	.then((value) => console.log("Resolved:W", value))
// 	.catch((error) => console.error("Rejected:W", error));

// Promise.reject(123)
// 	.then((value) => console.log("Resolved:W", value))
// 	.catch((error) => console.error("Rejected:W", error));

// Promise.all([Promise.resolve(1), Promise.resolve(2)]).then((values) =>
// 	console.log(values)
// );

// Promise.allSettled([Promise.resolve(1), Promise.reject("error")]).then(
// 	(results) => console.log(results)
// );

// Promise.any([Promise.reject("error"), Promise.resolve(1)]).then((value) =>
// 	console.log(value)
// );

// Promise.race([Promise.resolve(1), Promise.reject("error")]).then((value) =>
// 	console.log(value)
// );
