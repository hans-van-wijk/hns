import { json, type RequestHandler } from '@sveltejs/kit'

import db from 'database'

export const GET: RequestHandler = async (event) => {
  const products = await db.product.findMany()
  return json(products)
}
