import { r as redirect } from "../../chunks/index.js";
const actions = {
  setTheme: async ({ url, cookies }) => {
    const theme = url.searchParams.get("theme") || cookies.get("colortheme");
    const typeTheme = url.searchParams.get("typeTheme");
    const redirectTo = url.searchParams.get("redirectTo");
    if (theme) {
      cookies.set("colortheme", theme, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365
      });
    }
    if (typeTheme) {
      cookies.set("typetheme", typeTheme, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365
      });
    }
    throw redirect(303, redirectTo ?? "/");
  }
};
export {
  actions
};
