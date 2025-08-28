// app/api/og/rout.tsx

import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "next/og";

export async function GET(request: NextRequest) {
	const title = request.nextUrl.searchParams.get("title");
	if (!title) {
		return NextResponse.json("title does not specified", { status: 400 });
	}

	return new ImageResponse( // 동적으로 이미지 생성함
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "wheat",
					fontSize: 20,
				}}
			>
				{title}
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
