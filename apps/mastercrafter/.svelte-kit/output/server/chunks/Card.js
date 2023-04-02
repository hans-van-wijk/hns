import { c as create_ssr_component, g as add_attribute, l as is_void, h as escape, v as validate_component } from "./index2.js";
import { C as Container, H as Heading } from "./VideoBg.svelte_svelte_type_style_lang.js";
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { el = "span" } = $$props;
  let { text } = $$props;
  let { scale = 1 } = $$props;
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  return `${((tag) => {
    return tag ? `<${el}${add_attribute("class", `hns-heading}`, 0)}${add_attribute(
      "style",
      scale > 1 ? `font-size: calc(${scale} * 1.333rem)` : "font-size: 1rem;",
      0
    )}>${is_void(tag) ? "" : `${escape(text)}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(el)}`;
});
const css$1 = {
  code: ".hero.svelte-6gun76{padding-block:var(--hns-row-spacing, 8rem)}.hero-subtitle.svelte-6gun76{font-size:2rem}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "" } = $$props;
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { headingSize = 3 } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.headingSize === void 0 && $$bindings.headingSize && headingSize !== void 0)
    $$bindings.headingSize(headingSize);
  $$result.css.add(css$1);
  return `<div class="hero svelte-6gun76">${validate_component(Container, "Container").$$render($$result, { type }, {}, {
    default: () => {
      return `${title ? `${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          el: "h1",
          text: title,
          scale: headingSize
        },
        {},
        {}
      )}` : ``}
    ${subtitle ? `<p class="hero-subtitle svelte-6gun76">${escape(subtitle)}</p>` : ``}
    ${slots.default ? slots.default({}) : ``}`;
    }
  })}
</div>`;
});
const css = {
  code: ".hns-card.svelte-1jdtm1e{padding:var(--hns-gutter, 2.5rem);border:1px solid var(--hns-border-color-default, #eaeaea);min-height:100%}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="hns-card theme-default svelte-1jdtm1e">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Card as C,
  Hero as H,
  Text as T
};
