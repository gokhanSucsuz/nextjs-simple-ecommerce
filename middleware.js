import { NextResponse } from "next/server";
import { defaultLocale, locales } from "./app/consts/lang";
export default function middleware(request) {
	const pathname = request.nextUrl.pathname;
	const pathnameHas = locales.some(
		(l) => pathname.startsWith(`/${l}/`) || pathname.startsWith(`/${l}`)
	);

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
