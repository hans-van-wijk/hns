import { c as create_ssr_component, g as add_attribute } from "./index2.js";
import "./VideoBg.svelte_svelte_type_style_lang.js";
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = 600 } = $$props;
  let { height = 400 } = $$props;
  let { src = `https://via.placeholder.com/${width}x${height}?text=IMG` } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  return `<img alt="Placeholder"${add_attribute("src", src, 0)}>`;
});
const Split = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rev = false } = $$props;
  if ($$props.rev === void 0 && $$bindings.rev && rev !== void 0)
    $$bindings.rev(rev);
  return `<div class="${["hns-split", rev ? "hns-split-rev" : ""].join(" ").trim()}">${slots.first ? slots.first({}) : ``}
  ${slots.second ? slots.second({}) : ``}</div>`;
});
const css = {
  code: ".hns-carrousel.svelte-1gnpw4e{--column-size:55ch;overflow-x:scroll;overscroll-behavior-inline:contain;scroll-snap-type:x mandatory;scroll-padding-inline:2.5rem;max-width:100%;display:grid;grid-auto-flow:column;gap:2.5rem;margin-bottom:160px}.hns-carrousel > *{width:var(--column-size);max-width:calc(100vw - 7.5rem)}",
  map: null
};
const Carrousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

<div class="hns-carrousel svelte-1gnpw4e">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Carrousel as C,
  Image as I,
  Split as S
};
