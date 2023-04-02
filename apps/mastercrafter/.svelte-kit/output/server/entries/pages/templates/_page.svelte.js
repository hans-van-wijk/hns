import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { T as Text, H as Hero, C as Card } from "../../../chunks/Card.js";
import { S as Stack, H as Heading, C as Container } from "../../../chunks/VideoBg.svelte_svelte_type_style_lang.js";
import { I as Image, C as Carrousel, S as Split } from "../../../chunks/Carrousel.js";
const SplitImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  return `${validate_component(Stack, "Stack").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Image, "Image").$$render($$result, {}, {}, {})}
	<div>${validate_component(Heading, "Heading").$$render($$result, { text: title }, {}, {})}
		${validate_component(Text, "Text").$$render($$result, { text: subtitle }, {}, {})}</div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Hero, "Hero").$$render(
    $$result,
    {
      headingSize: 4,
      type: "contained",
      title: "Marketing solutions for startups"
    },
    {},
    {}
  )}

${validate_component(Container, "Container").$$render($$result, { type: "contained" }, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design & Web Design"
            },
            {},
            {}
          )}`;
        }
      })}

	${validate_component(Carrousel, "Carrousel").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design & Web Design"
            },
            {},
            {}
          )}
		${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design & Web Design"
            },
            {},
            {}
          )}
		${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design & Web Design"
            },
            {},
            {}
          )}
		${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design & Web Design"
            },
            {},
            {}
          )}
		${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design & Web Design"
            },
            {},
            {}
          )}
		${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design & Web Design"
            },
            {},
            {}
          )}
		${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design & Web Design"
            },
            {},
            {}
          )}
		${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design & Web Design"
            },
            {},
            {}
          )}`;
        }
      })}

	${validate_component(Carrousel, "Carrousel").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design – Web Design"
            },
            {},
            {}
          )}
		${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design – Web Design"
            },
            {},
            {}
          )}
		${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design – Web Design"
            },
            {},
            {}
          )}
		${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design – Web Design"
            },
            {},
            {}
          )}
		${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design – Web Design"
            },
            {},
            {}
          )}
		${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design – Web Design"
            },
            {},
            {}
          )}
		${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design – Web Design"
            },
            {},
            {}
          )}
		${validate_component(SplitImage, "SplitImage").$$render(
            $$result,
            {
              title: "Marketing solutions for startups",
              subtitle: "Product Design – Web Design"
            },
            {},
            {}
          )}`;
        }
      })}

	${validate_component(Stack, "Stack").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Split, "Split").$$render($$result, {}, {}, {
            second: () => {
              return `<div slot="second">${validate_component(SplitImage, "SplitImage").$$render(
                $$result,
                {
                  title: "Marketing solutions for startups",
                  subtitle: "Product Design – Web Design"
                },
                {},
                {}
              )}</div>`;
            },
            first: () => {
              return `<div slot="first">${validate_component(SplitImage, "SplitImage").$$render(
                $$result,
                {
                  title: "Marketing solutions for startups",
                  subtitle: "Product Design – Web Design"
                },
                {},
                {}
              )}</div>`;
            }
          })}
		${validate_component(Split, "Split").$$render($$result, {}, {}, {
            second: () => {
              return `<div slot="second">${validate_component(SplitImage, "SplitImage").$$render(
                $$result,
                {
                  title: "Marketing solutions for startups",
                  subtitle: "Product Design – Web Design"
                },
                {},
                {}
              )}</div>`;
            },
            first: () => {
              return `<div slot="first">${validate_component(SplitImage, "SplitImage").$$render(
                $$result,
                {
                  title: "Marketing solutions for startups",
                  subtitle: "Product Design – Web Design"
                },
                {},
                {}
              )}</div>`;
            }
          })}
		${validate_component(Split, "Split").$$render($$result, {}, {}, {
            second: () => {
              return `<div slot="second">${validate_component(SplitImage, "SplitImage").$$render(
                $$result,
                {
                  title: "Marketing solutions for startups",
                  subtitle: "Product Design – Web Design"
                },
                {},
                {}
              )}</div>`;
            },
            first: () => {
              return `<div slot="first">${validate_component(SplitImage, "SplitImage").$$render(
                $$result,
                {
                  title: "Marketing solutions for startups",
                  subtitle: "Product Design – Web Design"
                },
                {},
                {}
              )}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
