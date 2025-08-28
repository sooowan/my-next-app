// app/feed/template.tsx

"use client";

import { useEffect, useState } from "react";

interface FeedLayoutProps {
	children: React.ReactNode;
}

export default function FeedLayout(props: FeedLayoutProps) {
	const { children } = props;

	const [status, setStatus] = useState("mounting..");
	useEffect(() => {
		setTimeout(() => {
			setStatus("mounted!");
		}, 1000);
	});

	return (
		<div className="box template">
			<h4>FeedTemplate {status}</h4>
			<div style={{ padding: "8px" }}>{children}</div>
		</div>
	);
}
