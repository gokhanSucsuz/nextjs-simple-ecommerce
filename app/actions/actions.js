"use server";

import { redirect } from "next/navigation";

export async function createUser(formData) {
	const locale = formData.get("locale");
	redirect("/" + locale + "/signin");
}
