import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { C as Container, H as Heading, S as Stack } from "../../chunks/VideoBg.svelte_svelte_type_style_lang.js";
import { S as Section, B as Button } from "../../chunks/Section.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Container, "Container").$$render($$result, { type: "contained" }, {}, {
        default: () => {
          return `${validate_component(Heading, "Heading").$$render(
            $$result,
            {
              el: "h1",
              scale: 4,
              text: "Learn modern design fundamentals and 4x your design career."
            },
            {},
            {}
          )}
		${validate_component(Stack, "Stack").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, { kind: "cta" }, {}, {
                default: () => {
                  return `Get Started`;
                }
              })}
			${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `Get Started`;
                }
              })}
			<div>Haha</div>
			<div>Haha</div>
			<div>Haha</div>`;
            }
          })}

		<div class="hns-split"><div>This means that if you have this exact same component in different parts of your UI, it’s
				able to use its own logic to resize and best fit its Container. You have better control over
				the card’s layout than you would if you only had the global viewport to rely on.
			</div>
			<div>This means that if you have this exact same component in different parts of your UI, it’s
				able to use its own logic to resize and best fit its container. You have better control over
				the card’s layout than you would if you only had the global viewport to rely on.
			</div></div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
