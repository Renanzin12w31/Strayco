# 📦 Guia de Gestão do Catálogo (Supply)

Este guia foi criado para ajudar você a gerenciar os produtos do seu site, mesmo que você não tenha conhecimentos avançados em programação.

## 🗂️ Onde ficam os produtos?
Todos os produtos do site estão salvos em um único arquivo:
`data/products.json`

## 📝 Como adicionar um novo produto?
Para adicionar um produto, você deve abrir o arquivo `products.json` e adicionar um novo bloco de código entre chaves `{ }` dentro da lista.

### Estrutura de um Produto (Exemplo):
```json
{
    "id": "60",                                      // Um número único que identifica o produto
    "name": "Nome do Produto",                        // Nome que aparecerá no site
    "description": "Descrição detalhada...",          // Texto explicativo sobre o produto
    "price": 550,                                    // Preço (apenas números, sem RS ou vírgula)
    "categoryId": "tenis",                           // Categoria: "tenis" ou "roupas"
    "images": [
        "/images/products/tenis/meu-produto.webp"     // Caminho da imagem (veja a seção de imagens abaixo)
    ],
    "sizes": ["38", "39", "40"],                     // Tamanhos disponíveis
    "colors": ["Preto", "Branco"],                   // Cores do produto
    "stock": 10,                                     // Quantidade disponível
    "featured": true,                                // Se 'true', o produto ganha destaque
    "isNew": true,                                   // Se 'true', aparece a tag "NOVO"
    "onSale": false,                                 // Se 'true', indica que está em promoção
    "gender": "UNISEX"                               // Gênero: "UNISEX", "MASCULINO" ou "FEMININO"
}
```

## 📸 Como funcionam as imagens?
As imagens devem ser salvas nas pastas correspondentes:
- Tênis: `public/images/products/tenis/`
- Roupas: `public/images/products/roupas/`

**Dica:** Use nomes de arquivos simples, sem espaços ou acentos (ex: `nike-air-max.webp` em vez de `Tênis Nike Air Máx.webp`).

## 🚀 Dicas Importantes
1. **Vírgulas:** No arquivo JSON, cada item deve ser separado por uma vírgula, EXCETO o último item da lista.
2. **IDs Únicos:** Nunca repita o "id". Se o último produto era "59", o próximo deve ser "60".
3. **Página Inicial:** Se você marcar `featured: true`, o produto terá mais chances de aparecer em carrosséis de destaque na home.
