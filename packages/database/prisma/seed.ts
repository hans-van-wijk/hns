import { PrismaClient } from '@prisma/client'
import fetch from 'node-fetch';

const db = new PrismaClient()

type Post = {
  title: string
  body: string
}

type Product = {
  title: string
  description: string
}

async function getPosts() {
  const response = await fetch('https://dummyjson.com/posts')
  const posts = await response.json()
  return posts as Post[]
}

async function getProducts() {
  const response = await fetch('https://dummyjson.com/products')
  const products = await response.json()
  return products as Product[]
}

function slugify(text: string) {
  return text
    .replace(/\s/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase()
}

async function main() {
  const { posts } = await getPosts()
  
  for (const post of posts) {
    await db.post.create({
      data: {
        title: post.title,
        content: post.body,
        slug: slugify(post.title),
      }
    })
  }
  const { products } = await getProducts()
  for (const product of products) {
    await db.product.create({
      data: {
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage,
        rating: product.rating,
        stock: product.stock,
        brand: product.brand,
        category: product.category,
        thumbnail: product.thumbnail,
      }
    })
  }
}


main()
