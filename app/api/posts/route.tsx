// api/posts/route.tsx

import { NextResponse } from "next/server";
import samplePosts from "@/lib/constants/sample-post.json";

export async function GET() {
	return NextResponse.json(samplePosts, { status: 200 });
}
