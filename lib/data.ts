export function getProductsForCatalogGender(
  gender: 'MALE' | 'FEMALE' | 'UNISEX'
) {
  // ✅ garante que exista um array base para filtrar
  // Se no seu arquivo já existir uma const/let com os produtos (ex: allProducts),
  // troque "products" aqui pelo nome que você já tem.
  const base: Product[] = getAllProducts()

  if (gender === 'MALE') {
    return base.filter((p: Product) => p.gender === 'MALE' || p.gender === 'UNISEX')
  }

  if (gender === 'FEMALE') {
    return base.filter((p: Product) => p.gender === 'FEMALE' || p.gender === 'UNISEX')
  }

  return base.filter((p: Product) => p.gender === 'UNISEX')
}
