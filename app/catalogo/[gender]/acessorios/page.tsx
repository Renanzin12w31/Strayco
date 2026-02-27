import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products"; // ajuste se necessário

export default function AcessoriosPage({
  params,
}: {
  params: { gender: string };
}) {
  const genderParam = params.gender.toUpperCase(); // "FEMININO" | "MASCULINO" etc.

  const filteredProducts = products.filter((p) => {
    const isAcessorio = p.categoryId === "acessorios";
    const matchesGender = p.gender === genderParam || p.gender === "UNISEX";
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
          <p className="text-gray-400">Pulseiras, bonés, bags e mais.</p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-400">
            Nenhum acessório encontrado.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredProducts.map((p) => (
              <Link
                key={p.id}
                href={`/produto/${p.id}`}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="relative aspect-square">
                  <Image
                    src={p.images?.[0] || "/images/placeholder.webp"}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                <div className="p-3">
                  <p className="text-white font-semibold leading-tight line-clamp-2">
                    {p.name}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    R$ {Number(p.price).toFixed(0)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}