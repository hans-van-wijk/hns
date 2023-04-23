import { json, type RequestHandler } from '@sveltejs/kit'

import db from 'database'

export const GET: RequestHandler = async (event) => {
  const posts = await db.post.findMany()
  return json(posts)
}
