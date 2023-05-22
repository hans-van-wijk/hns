export const prerender = true;

export const load: LayoutLoad = ({ url }) => {
  return { url: url.pathname }
}
