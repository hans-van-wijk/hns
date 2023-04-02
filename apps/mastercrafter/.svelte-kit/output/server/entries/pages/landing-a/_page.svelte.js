import { c as create_ssr_component, g as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { H as Hero, T as Text, C as Card } from "../../../chunks/Card.js";
import { S as Stack, C as Container, H as Heading } from "../../../chunks/VideoBg.svelte_svelte_type_style_lang.js";
import { S as Split, I as Image, C as Carrousel } from "../../../chunks/Carrousel.js";
import { B as Button, S as Section } from "../../../chunks/Section.js";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "default" } = $$props;
  let { placeholder = "" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  return `<input class="hns-input"${add_attribute("type", type, 0)}${add_attribute("placeholder", placeholder, 0)}>`;
});
const css = {
  code: ".hns-video-bg.svelte-2waud0.svelte-2waud0{position:relative}.hns-video-bg.svelte-2waud0 video.svelte-2waud0{width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;object-fit:cover}",
  map: null
};
const VideoBg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css);
  return `<div class="hns-video-bg svelte-2waud0"><video ${"playsinline"} ${"autoplay"} ${"loop"}${add_attribute("src", url, 0)} muted class="svelte-2waud0"></video>
  ${slots.default ? slots.default({}) : ``}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Stack, "Stack").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(VideoBg, "VideoBg").$$render($$result, { url: "home-bg-NV2HXGUL.mp4" }, {}, {
        default: () => {
          return `<div style="--hns-heading-color: #fff">${validate_component(Hero, "Hero").$$render($$result, { title: "Hans", type: "content" }, {}, {
            default: () => {
              return `${validate_component(Stack, "Stack").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Input, "Input").$$render(
                    $$result,
                    {
                      type: "search",
                      placeholder: "Search entire catalog"
                    },
                    {},
                    {}
                  )}
					<div>${validate_component(Button, "Button").$$render($$result, { size: "tiny" }, {}, {
                    default: () => {
                      return `Tag #1`;
                    }
                  })}
						${validate_component(Button, "Button").$$render($$result, { size: "tiny" }, {}, {
                    default: () => {
                      return `Tag #2`;
                    }
                  })}
						${validate_component(Button, "Button").$$render($$result, { size: "tiny" }, {}, {
                    default: () => {
                      return `Tag #3`;
                    }
                  })}
						${validate_component(Button, "Button").$$render($$result, { size: "tiny" }, {}, {
                    default: () => {
                      return `Tag #4`;
                    }
                  })}</div>`;
                }
              })}`;
            }
          })}</div>`;
        }
      })}

	${validate_component(Container, "Container").$$render($$result, { type: "contained" }, {}, {
        default: () => {
          return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Stack, "Stack").$$render($$result, { spacing: "row" }, {}, {
                default: () => {
                  return `${validate_component(Split, "Split").$$render($$result, {}, {}, {
                    second: () => {
                      return `<div slot="second">
						<video ${"playsinline"} ${"autoplay"} ${"loop"} src="homepage_animation-6OK5OEAX.mp4"></video></div>`;
                    },
                    first: () => {
                      return `<div slot="first">${validate_component(Stack, "Stack").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Heading, "Heading").$$render(
                            $$result,
                            {
                              el: "h3",
                              scale: 3,
                              text: "Just add .co to any .eth name"
                            },
                            {},
                            {}
                          )}
							${validate_component(Text, "Text").$$render(
                            $$result,
                            {
                              el: "p",
                              scale: 1,
                              text: "You’ll see all of their links, NFTs, ENS domains, and profile all in one place."
                            },
                            {},
                            {}
                          )}`;
                        }
                      })}</div>`;
                    }
                  })}

				${validate_component(Split, "Split").$$render($$result, { rev: true }, {}, {
                    second: () => {
                      return `<div slot="second">${validate_component(Image, "Image").$$render(
                        $$result,
                        {
                          src: "homepage_customize_graphic-ETGVKACY.png"
                        },
                        {},
                        {}
                      )}</div>`;
                    },
                    first: () => {
                      return `<div slot="first">${validate_component(Stack, "Stack").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Heading, "Heading").$$render(
                            $$result,
                            {
                              el: "h3",
                              scale: 3,
                              text: "Customize yours.\n              It's free!"
                            },
                            {},
                            {}
                          )}
							${validate_component(Text, "Text").$$render(
                            $$result,
                            {
                              el: "p",
                              scale: 1,
                              text: "Connect your wallet to customize your own eth.co profile. Add links, a bio, avatar and more - show all your stuff in one place."
                            },
                            {},
                            {}
                          )}`;
                        }
                      })}</div>`;
                    }
                  })}

				${validate_component(Carrousel, "Carrousel").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                        default: () => {
                          return `<img alt="pc" src="image sha3 f41fba2297427f5dc13c20ee5c74f9265967ff091f00ea3b0485958ca711615d.jpg">`;
                        }
                      })}
					${validate_component(Card, "Card").$$render($$result, {}, {}, {
                        default: () => {
                          return `<img alt="pc" src="image sha3 f41fba2297427f5dc13c20ee5c74f9265967ff091f00ea3b0485958ca711615d.jpg">`;
                        }
                      })}
					${validate_component(Card, "Card").$$render($$result, {}, {}, {
                        default: () => {
                          return `<img alt="pc" src="image sha3 f41fba2297427f5dc13c20ee5c74f9265967ff091f00ea3b0485958ca711615d.jpg">`;
                        }
                      })}
					${validate_component(Card, "Card").$$render($$result, {}, {}, {
                        default: () => {
                          return `<img alt="pc" src="image sha3 f41fba2297427f5dc13c20ee5c74f9265967ff091f00ea3b0485958ca711615d.jpg">`;
                        }
                      })}
					${validate_component(Card, "Card").$$render($$result, {}, {}, {
                        default: () => {
                          return `<img alt="pc" src="image sha3 f41fba2297427f5dc13c20ee5c74f9265967ff091f00ea3b0485958ca711615d.jpg">`;
                        }
                      })}
					${validate_component(Card, "Card").$$render($$result, {}, {}, {
                        default: () => {
                          return `<img alt="pc" src="image sha3 f41fba2297427f5dc13c20ee5c74f9265967ff091f00ea3b0485958ca711615d.jpg">`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
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
