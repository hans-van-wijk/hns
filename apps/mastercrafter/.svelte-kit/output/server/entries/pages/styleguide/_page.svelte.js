import { c as create_ssr_component, v as validate_component, h as escape } from "../../../chunks/index2.js";
import { S as Stack, C as Container } from "../../../chunks/VideoBg.svelte_svelte_type_style_lang.js";
import { C as Card, T as Text, H as Hero } from "../../../chunks/Card.js";
const css$1 = {
  code: ".hns-collection-grid.svelte-wrvj56{display:grid;gap:var(--hns-gutter, 2.5rem);grid-template-columns:repeat(auto-fill, minmax(250px, 1fr))}",
  map: null
};
const CollectionGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="hns-collection-grid svelte-wrvj56">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Token_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fill.svelte-1deu3ya{aspect-ratio:6/6;box-shadow:0 0 0 1px rgba(0, 0, 0, 0.1)}",
  map: null
};
const Token = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "Token" } = $$props;
  let { token } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.token === void 0 && $$bindings.token && token !== void 0)
    $$bindings.token(token);
  $$result.css.add(css);
  return `<div class="token">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Stack, "Stack").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="fill svelte-1deu3ya" style="${"background-color: var(--" + escape(token, true) + ")"}"></div>
			${validate_component(Text, "Text").$$render($$result, { text: label }, {}, {})}`;
        }
      })}`;
    }
  })}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Hero, "Hero").$$render($$result, { title: "Tokens", type: "contained" }, {}, {})}

${validate_component(Container, "Container").$$render($$result, { type: "contained" }, {}, {
    default: () => {
      return `${validate_component(CollectionGrid, "CollectionGrid").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Token, "Token").$$render(
            $$result,
            {
              label: "App background",
              token: "hns-app-background"
            },
            {},
            {}
          )}
		${validate_component(Token, "Token").$$render(
            $$result,
            {
              label: "App text color",
              token: "hns-app-text-color"
            },
            {},
            {}
          )}
		${validate_component(Token, "Token").$$render(
            $$result,
            {
              label: "App Heading color",
              token: "hns-heading-color"
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
