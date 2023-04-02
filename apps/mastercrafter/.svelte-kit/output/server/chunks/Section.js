import { c as create_ssr_component, h as escape, k as compute_slots } from "./index2.js";
import "./VideoBg.svelte_svelte_type_style_lang.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { kind = "neutral" } = $$props;
  let { size = "normal" } = $$props;
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<a href="/" class="${"hns-button hns-button-" + escape(kind, true) + " hns-button-" + escape(size, true)}">${slots.default ? slots.default({}) : ``}</a>`;
});
const css = {
  code: ".hns-section.svelte-15fws7x{position:relative;padding-block:var(--hns-row-spacing, 2rem)}.hns-section-mediabg.svelte-15fws7x{position:absolute;top:0;left:0;bottom:0;right:0}",
  map: null
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  $$result.css.add(css);
  return `<div class="hns-section svelte-15fws7x">${$$slots.mediabg ? `<div class="hns-section-mediabg svelte-15fws7x">${slots.mediabg ? slots.mediabg({}) : ``}</div>` : ``}
  ${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Button as B,
  Section as S
};
