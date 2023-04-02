import { c as create_ssr_component, o as onDestroy, b as spread, e as escape_object, d as createEventDispatcher, v as validate_component, f as each, g as add_attribute, h as escape, i as subscribe } from "../../chunks/index2.js";
import { c as checkIconState, g as generateIcon, S as Stack, C as Container, H as Heading } from "../../chunks/VideoBg.svelte_svelte_type_style_lang.js";
import { p as page } from "../../chunks/stores.js";
import "../../chunks/utils.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `<div class="${["hns-drawer", open ? "open" : ""].join(" ").trim()}">
  <span class="hns-drawer-close">${validate_component(Icon, "Icon").$$render($$result, { icon: "feather:x" }, {}, {})}</span>
  ${slots.default ? slots.default({}) : ``}</div>`;
});
const Navlist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { layout = "vertical" } = $$props;
  let { items = [] } = $$props;
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `${items.length > 0 ? `<nav class="hns-nav-list">${validate_component(Stack, "Stack").$$render($$result, { el: "ul", layout }, {}, {
    default: () => {
      return `${each(items, ({ title, link }) => {
        return `<li><a class="hns-box-link"${add_attribute("href", link, 0)}>${escape(title)}</a>
        </li>`;
      })}`;
    }
  })}</nav>` : ``}`;
});
const css$1 = {
  code: ".hns-header.svelte-xo1358.svelte-xo1358{padding-block:var(--hns-padding-block, 1rem);border-bottom:1px solid #d9d9d9}svg.svelte-xo1358 path.svelte-xo1358{fill:var(--hns-app-text-color, #000)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { navItems = [] } = $$props;
  let { contentWidth = "" } = $$props;
  if ($$props.navItems === void 0 && $$bindings.navItems && navItems !== void 0)
    $$bindings.navItems(navItems);
  if ($$props.contentWidth === void 0 && $$bindings.contentWidth && contentWidth !== void 0)
    $$bindings.contentWidth(contentWidth);
  $$result.css.add(css$1);
  return `<header class="hns-header svelte-xo1358">${validate_component(Container, "Container").$$render($$result, { width: contentWidth }, {}, {
    default: () => {
      return `${validate_component(Stack, "Stack").$$render($$result, { layout: "horizontal", justify: "spread" }, {}, {
        default: () => {
          return `${slots.logo ? slots.logo({}) : `
        <a href="/"><svg id="logo-51" width="167" height="41" viewBox="0 0 167 41" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-xo1358"><path d="M48.6307 28.7936H60.5827V25.1936H52.8787V11.6336H48.6307V28.7936Z" class="cneutral svelte-xo1358" fill="#2F234F"></path><path d="M67.6639 26.3936C65.9599 26.3936 65.0719 24.9056 65.0719 22.6736C65.0719 20.4416 65.9599 18.9296 67.6639 18.9296C69.3679 18.9296 70.2799 20.4416 70.2799 22.6736C70.2799 24.9056 69.3679 26.3936 67.6639 26.3936ZM67.6879 29.1776C71.6479 29.1776 74.2399 26.3696 74.2399 22.6736C74.2399 18.9776 71.6479 16.1696 67.6879 16.1696C63.7519 16.1696 61.1119 18.9776 61.1119 22.6736C61.1119 26.3696 63.7519 29.1776 67.6879 29.1776Z" class="cneutral svelte-xo1358" fill="#2F234F"></path><path d="M81.0943 33.0416C82.9183 33.0416 84.5263 32.6336 85.6063 31.6736C86.5903 30.7856 87.2383 29.4416 87.2383 27.5936V16.5056H83.4943V17.8256H83.4463C82.7263 16.7936 81.6223 16.1456 79.9903 16.1456C76.9423 16.1456 74.8303 18.6896 74.8303 22.2896C74.8303 26.0576 77.3983 28.1216 80.1583 28.1216C81.6463 28.1216 82.5823 27.5216 83.3023 26.7056H83.3983V27.9296C83.3983 29.4176 82.7023 30.2816 81.0463 30.2816C79.7503 30.2816 79.1023 29.7296 78.8863 29.0816H75.0943C75.4783 31.6496 77.7103 33.0416 81.0943 33.0416ZM81.0703 25.2176C79.6063 25.2176 78.6463 24.0176 78.6463 22.1696C78.6463 20.2976 79.6063 19.0976 81.0703 19.0976C82.7023 19.0976 83.5663 20.4896 83.5663 22.1456C83.5663 23.8736 82.7743 25.2176 81.0703 25.2176Z" class="cneutral svelte-xo1358" fill="#2F234F"></path><path d="M94.9367 26.3936C93.2327 26.3936 92.3447 24.9056 92.3447 22.6736C92.3447 20.4416 93.2327 18.9296 94.9367 18.9296C96.6407 18.9296 97.5527 20.4416 97.5527 22.6736C97.5527 24.9056 96.6407 26.3936 94.9367 26.3936ZM94.9607 29.1776C98.9207 29.1776 101.513 26.3696 101.513 22.6736C101.513 18.9776 98.9207 16.1696 94.9607 16.1696C91.0247 16.1696 88.3847 18.9776 88.3847 22.6736C88.3847 26.3696 91.0247 29.1776 94.9607 29.1776Z" class="cneutral svelte-xo1358" fill="#2F234F"></path><path d="M102.655 28.7936H106.567V16.5056H102.655V28.7936ZM102.655 14.8016H106.567V11.6336H102.655V14.8016Z" class="cneutral svelte-xo1358" fill="#2F234F"></path><path d="M108.264 32.8496H112.176V27.5216H112.224C112.992 28.5536 114.12 29.1776 115.704 29.1776C118.92 29.1776 121.056 26.6336 121.056 22.6496C121.056 18.9536 119.064 16.1456 115.8 16.1456C114.12 16.1456 112.92 16.8896 112.08 17.9936H112.008V16.5056H108.264V32.8496ZM114.696 26.1536C113.016 26.1536 112.056 24.7856 112.056 22.7936C112.056 20.8016 112.92 19.2896 114.624 19.2896C116.304 19.2896 117.096 20.6816 117.096 22.7936C117.096 24.8816 116.184 26.1536 114.696 26.1536Z" class="cneutral svelte-xo1358" fill="#2F234F"></path><path d="M127.426 29.1776C130.642 29.1776 133.018 27.7856 133.018 25.0976C133.018 21.9536 130.474 21.4016 128.314 21.0416C126.754 20.7536 125.362 20.6336 125.362 19.7696C125.362 19.0016 126.106 18.6416 127.066 18.6416C128.146 18.6416 128.89 18.9776 129.034 20.0816H132.634C132.442 17.6576 130.57 16.1456 127.09 16.1456C124.186 16.1456 121.786 17.4896 121.786 20.0816C121.786 22.9616 124.066 23.5376 126.202 23.8976C127.834 24.1856 129.322 24.3056 129.322 25.4096C129.322 26.2016 128.578 26.6336 127.402 26.6336C126.106 26.6336 125.29 26.0336 125.146 24.8096H121.45C121.57 27.5216 123.826 29.1776 127.426 29.1776Z" class="cneutral svelte-xo1358" fill="#2F234F"></path><path d="M138.331 29.1536C140.035 29.1536 141.115 28.4816 142.003 27.2816H142.075V28.7936H145.819V16.5056H141.907V23.3696C141.907 24.8336 141.091 25.8416 139.747 25.8416C138.499 25.8416 137.899 25.0976 137.899 23.7536V16.5056H134.011V24.5696C134.011 27.3056 135.499 29.1536 138.331 29.1536Z" class="cneutral svelte-xo1358" fill="#2F234F"></path><path d="M147.521 28.7936H151.433V21.9056C151.433 20.4416 152.153 19.4096 153.377 19.4096C154.553 19.4096 155.105 20.1776 155.105 21.4976V28.7936H159.017V21.9056C159.017 20.4416 159.713 19.4096 160.961 19.4096C162.137 19.4096 162.689 20.1776 162.689 21.4976V28.7936H166.601V20.8016C166.601 18.0416 165.209 16.1456 162.425 16.1456C160.841 16.1456 159.521 16.8176 158.561 18.3056H158.513C157.889 16.9856 156.665 16.1456 155.057 16.1456C153.281 16.1456 152.105 16.9856 151.337 18.2576H151.265V16.5056H147.521V28.7936Z" class="cneutral svelte-xo1358" fill="#2F234F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.65417 3.89149C7.22351 4.89185 5.92981 6.0746 4.80676 7.40602C9.39606 6.97995 15.2266 7.67567 21.9958 11.0603C29.2244 14.6745 35.0452 14.7967 39.0962 14.0153C38.7286 12.9024 38.2658 11.8328 37.7177 10.816C33.0804 11.3051 27.1354 10.6577 20.207 7.1936C15.8074 4.9938 11.9292 4.08763 8.65417 3.89149ZM35.0088 6.96027C31.3467 2.86862 26.0248 0.293625 20.1014 0.293625C18.3619 0.293625 16.6741 0.515732 15.0651 0.933105C17.2443 1.52771 19.5593 2.39761 21.9958 3.61589C27.0684 6.15215 31.4478 6.96878 35.0088 6.96027ZM39.9623 17.9217C35.0683 18.8881 28.3102 18.6896 20.207 14.638C12.6314 10.8502 6.60187 10.8979 2.53534 11.8016C2.32544 11.8482 2.12048 11.8972 1.92047 11.9482C1.38806 13.1061 0.963074 14.3237 0.658142 15.5881C0.983826 15.5011 1.32037 15.4184 1.6676 15.3412C6.60101 14.2449 13.5715 14.2925 21.9958 18.5047C29.5715 22.2925 35.601 22.2448 39.6676 21.3411C39.8069 21.3102 39.9442 21.2782 40.0792 21.2452C40.094 20.9299 40.1014 20.6126 40.1014 20.2936C40.1014 19.4911 40.0542 18.6996 39.9623 17.9217ZM39.4262 25.4659C34.5797 26.3132 28.0184 25.988 20.207 22.0824C12.6314 18.2946 6.60187 18.3423 2.53534 19.246C1.63269 19.4465 0.820679 19.6908 0.10437 19.9487C0.102417 20.0634 0.10144 20.1784 0.10144 20.2936C0.10144 31.3393 9.05573 40.2936 20.1014 40.2936C29.3585 40.2936 37.1467 34.0045 39.4262 25.4659Z" class="ccustom svelte-xo1358" fill="#7F57F1"></path></svg></a>
      `}
      ${validate_component(Navlist, "Navlist").$$render($$result, { layout: "horizontal", items: navItems }, {}, {})}`;
        }
      })}`;
    }
  })}
</header>`;
});
const app = "";
const index = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".settings.svelte-11ixtog{position:fixed;left:2rem;bottom:2rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const fontlist = [
    "inter",
    "august",
    "barlow",
    "bendicion",
    "bigilla",
    "brand",
    "chomsky",
    "corben",
    "dmSerifDisplay",
    "dugasPro",
    "squadaOne",
    "editorialNew",
    "formulaCondensed",
    "frKrakenSlab",
    "leMurmure",
    "mak",
    "mattone",
    "migha",
    "ericaOne"
  ];
  const navItems = [
    { title: "Template", link: "/templates" },
    { title: "template", link: "/landing-a" },
    { title: "Styleguide", link: "/styleguide" }
  ];
  const themes = [{ name: "default" }, { name: "hns" }, { name: "purple" }];
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Header, "Header").$$render($$result, { navItems, contentWidth: "contained" }, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Stack, "Stack").$$render($$result, {}, {}, {
            default: () => {
              return `<form class="style-switcher" method="POST">${validate_component(Stack, "Stack").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Heading, "Heading").$$render($$result, { el: "p", scale: 1, text: "Color" }, {}, {})}
				${themes.length > 0 ? `<ul>${each(themes, ({ name }) => {
                    return `<li><button formaction="${"/?/setTheme&theme=" + escape(name, true) + "-light&redirectTo=" + escape($page.url.pathname, true)}">${escape(name)} light</button></li>
							<li><button formaction="${"/?/setTheme&theme=" + escape(name, true) + "-dark&redirectTo=" + escape($page.url.pathname, true)}">${escape(name)} dark</button>
							</li>`;
                  })}</ul>` : ``}
				${validate_component(Heading, "Heading").$$render($$result, { el: "p", scale: 1, text: "Type" }, {}, {})}
				<ul>${each(fontlist, (font) => {
                    return `<li><button formaction="${"/?/setTheme&typeTheme=" + escape(font, true) + "&redirectTo=" + escape($page.url.pathname, true)}">${escape(font)}</button>
						</li>`;
                  })}</ul>`;
                }
              })}</form>`;
            }
          })}`;
        }
      }
    )}

<button class="settings svelte-11ixtog">Settings</button>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Layout as default
};
