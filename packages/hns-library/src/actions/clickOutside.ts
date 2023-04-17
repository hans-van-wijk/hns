// https://navillus.dev/blog/power-of-svelte-actions

export default (node, _options = {}) => {
  const options = { onClickOutside: () => {}, ..._options }

  function detect({ target }) {
    if (!node.contains(target)) {
      options.onClickOutside()
    }
  }
  document.addEventListener('click', detect, { passive: true, capture: true })

  return {
    destroy() {
      document.removeEventListener('click', detect)
    },
  }
}