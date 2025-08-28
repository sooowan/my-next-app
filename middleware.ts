// middleware.ts

import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
	const response = NextResponse.next({
		request: {
			headers: request.headers,
		},
	});

	response.headers.set("x-hello-from-sooowan", "wowowowowow");
	return response;
}
