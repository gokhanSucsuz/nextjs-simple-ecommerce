import { NextResponse } from "next/server";
import { defaultLocale, locales } from "./app/consts/lang";
import { cookies } from "next/headers";
export default function middleware(request) {
	const pathname = request.nextUrl.pathname;
	const pathnameHas = locales.some(
		(l) => pathname.startsWith(`/${l}/`) || pathname.startsWith(`/${l}`)
	);

	if (pathname.includes("/profile")) {
		const token = cookies().get("session")?.value;
		if (!token) {
			request.nextUrl.pathname = `/${defaultLocale}/main`;
			return NextResponse.redirect(request.nextUrl);
		} else {
			// TODO verify !!
		}
	}

	if (pathnameHas) {
		const splittedSegments = pathname.split("/");
		console.log(splittedSegments);
		if (splittedSegments.length === 2) {
			request.nextUrl.pathname = `/${splittedSegments[1]}/main`;
		}
	} else {
		request.nextUrl.pathname = `/${defaultLocale}/main`;
		return NextResponse.redirect(request.nextUrl);
	}
}

export const config = {
	matcher: ["/", "/((?!_next).*)"]
};
