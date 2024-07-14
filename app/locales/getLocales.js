import en from "./en.json";
import tr from "./tr.json";

const locales = {
	tr,
	en
};

export const getLocale = (locale) => {
	return locales[locale];
};
