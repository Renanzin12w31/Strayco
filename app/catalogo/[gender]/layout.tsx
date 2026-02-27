export const dynamicParams = false

export function generateStaticParams() {
  return [
    { gender: 'masculino' },
    { gender: 'feminino' },
    { gender: 'unisex' },
  ]
}

export default function CatalogGenderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}