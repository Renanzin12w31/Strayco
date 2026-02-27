// ============================================
// DATA HELPERS - STATIC PRODUCTS & CATEGORIES
// ============================================

import productsDataRaw from '@/data/products.json'
import categoriesData from '@/data/categories.json'

// IDs de produtos que ainda não possuem imagens (serão ocultados temporariamente)
const EXCLUDED_PRODUCT_IDS = ['66', '69', '70', '71', '76']

export type Product = {
  id: string
  name: string
  description: string
  price: number
  categoryId: string
  images: string[]
  sizes: string[]
  colors: string[]
  stock: number
  featured: boolean
  isNew: boolean
  onSale: boolean
  gender: 'MALE' | 'FEMALE' | 'UNISEX'
  essential?: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
}

// Base de produtos já filtrada
const productsData = (productsDataRaw as Product[]).filter(
  (p) => !EXCLUDED_PRODUCT_IDS.includes(p.id)
)

// ============================================
// PRODUCT FUNCTIONS
// ============================================

export function getAllProducts(): Product[] {
  return productsData
}

export function getProductById(id: string): Product | undefined {
  return productsData.find((p) => p.id === id)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return productsData.filter((p) => p.categoryId === categoryId)
}

export function getProductsByGender(gender: 'MALE' | 'FEMALE' | 'UNISEX'): Product[] {
  return productsData.filter((p) => p.gender === gender)
}

export function getFeaturedProducts(limit?: number): Product[] {
  const featured = productsData.filter((p) => p.featured)
  return limit ? featured.slice(0, limit) : featured
}

export function getNewProducts(limit?: number): Product[] {
  const newProducts = productsData.filter((p) => p.isNew)
  return limit ? newProducts.slice(0, limit) : newProducts
}

export function getSaleProducts(limit?: number): Product[] {
  const onSale = productsData.filter((p) => p.onSale)
  return limit ? onSale.slice(0, limit) : onSale
}

export function getEssentialProducts(limit?: number): Product[] {
  const essentials = productsData.filter((p) => !!p.essential)
  return limit ? essentials.slice(0, limit) : essentials
}

export function getRelatedProducts(productId: string, limit: number = 4): Product[] {
  const product = getProductById(productId)
  if (!product) return []

  return productsData
    .filter((p) => p.categoryId === product.categoryId && p.id !== productId)
    .slice(0, limit)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return productsData.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
  )
}

/**
 * Catálogo por gênero:
 * - masculino: MALE + UNISEX
 * - feminino: FEMALE + UNISEX
 * - unisex: só UNISEX
 */
export function getProductsForCatalogGender(gender: 'MALE' | 'FEMALE' | 'UNISEX'): Product[] {
  if (gender === 'MALE') {
    return productsData.filter((p) => p.gender === 'MALE' || p.gender === 'UNISEX')
  }
  if (gender === 'FEMALE') {
    return productsData.filter((p) => p.gender === 'FEMALE' || p.gender === 'UNISEX')
  }
  return productsData.filter((p) => p.gender === 'UNISEX')
}

// ============================================
// CATEGORY FUNCTIONS
// ============================================

export function getAllCategories(): Category[] {
  return categoriesData as Category[]
}

export function getCategoryById(id: string): Category | undefined {
  return (categoriesData as Category[]).find((c) => c.id === id)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return (categoriesData as Category[]).find((c) => c.slug === slug)
}
