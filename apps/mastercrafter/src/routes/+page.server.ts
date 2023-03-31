import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  setTheme:async ({ url, cookies }) => {
    const theme = url.searchParams.get('theme') || cookies.get("colortheme");
    const typeTheme = url.searchParams.get('typeTheme');
    const redirectTo = url.searchParams.get('redirectTo');
    // todo: validate theme
    if(theme) {
      cookies.set("colortheme", theme, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      })
    } 
    if(typeTheme) {
      cookies.set("typetheme", typeTheme, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      })
    } 

    // Should secure redirect: https://www.youtube.com/watch?v=ieECVME5ZLU
    throw redirect(303, redirectTo ?? "/");
  },  
};