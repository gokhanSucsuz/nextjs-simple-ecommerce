"use server";

import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createUser(formData) {
	const locale = formData.get("locale");
	redirect("/" + locale + "/signin");
}

export async function onLogin(formData) {
	const email = formData.get("email");
	const password = formData.get("password");
	if (email === "admin@admin.com" && password === "admin123") {
		const payload = { email, name: "User", surname: "Admin" };
		const encodedKey = new TextEncoder().encode("mySecretTokenKey");
		const jwt = await new SignJWT(payload)
			.setProtectedHeader({ alg: "HS256" })
			.setIssuedAt()
			.setAudience()
			.setIssuer("issueeerrr")
			.setExpirationTime("1d")
			.sign(encodedKey);
		const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
		cookies().set("session", jwt, {
			secure: true,
			expires: expiresAt,
			path: "/"
		});
		return {
			user: payload,
			jwt
		};
	}
}

export async function decrypt(session, key) {
	try {
		const { payload } = await jwtVerify(session, key, {
			algorithms: ["HS256"]
		});
		return payload;
	} catch (error) {}
}

const getUserSession = async () => {
	const session = cookies.get("session")?.value;
	const payload = await decrypt(session);
	if (!session || !payload) return null;
	return payload;
};

export async function userLogin() {
	cookies().delete("session");
	redirect("/");
}
