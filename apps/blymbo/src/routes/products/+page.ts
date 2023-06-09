import type { Product } from '@prisma/client'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
  // `fetch` understands the relative path and saves the response
  // inside the HTML to be reused avoiding additional requests
  const response = await fetch('/api/products')

  // SvelteKit is going to generate the types
  const products: Product[] = await response.json()

  // this becomes available on the page as `data.posts`
  return { products }
}
