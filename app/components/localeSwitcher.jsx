"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { locales } from "../consts/lang";
const LocaleSwitcher = (props) => {
	const [defaultLocale, setDefaultLocale] = useState(props.countryCode);
	const router = useRouter();
	const pathname = usePathname();
	const handleLang = (local) => {
		const splittedPath = pathname.split("/").slice(2).join("/");
		router.replace("/" + local + "/" + splittedPath);
	};
	return (
		<div className="max-w-sm mx-auto">
			<select
				onChange={(e) => {
					setDefaultLocale(e.target.validationMessage.toLowerCase());
					handleLang(e.target.value.toLowerCase());
				}}
				value={defaultLocale}
				id="countries"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
				{locales.map((item) => {
					return (
						<option key={item} value={item}>
							{item.toUpperCase()}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default LocaleSwitcher;
