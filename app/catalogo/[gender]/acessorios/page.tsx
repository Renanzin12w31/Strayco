import Link from "next/link";
import { products } from "@/data/products"; // ajuste se o caminho for diferente
import ProductGrid from "@/components/ProductGrid"; // componente que mostra produtos

export default function AcessoriosPage({
  params,
}: {
  params: { gender: string };
}) {
  const genderParam = params.gender.toUpperCase();

  // filtra acessórios do gênero atual + unisex
  const filteredProducts = products.filter((product) => {
    const isAcessorio = product.categoryId === "acessorios";
    const matchesGender =
      product.gender === genderParam || product.gender === "UNISEX";

    return isAcessorio && matchesGender;
  });

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <Link
          href={`/catalogo/${params.gender}`}
          className="text-gray-400 hover:text-white"
        >
          ← Voltar
        </Link>

        <div className="text-center mb-10 mt-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Acessórios {params.gender}
          </h1>
          <p className="text-gray-400">
            Produtos acessórios disponíveis.
          </p>
        </div>

        <ProductGrid products={filteredProducts} />
      </div>
    </main>
  );
}