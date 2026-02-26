export default function TrocasDevolucoesPage() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-3xl md:text-4xl font-bold">
          Trocas e Devoluções
        </h1>

        <p className="text-gray-300 leading-relaxed">
          <strong>Política de Trocas e Devoluções – Strayco</strong>
        </p>

        <p className="text-gray-300 leading-relaxed">
          A Strayco preza pela segurança e satisfação de seus clientes. 
          Por isso, todos os nossos produtos possuem garantia contra defeitos de fabricação, 
          além da possibilidade de troca em casos de envio incorreto (produto diferente do encomendado).
        </p>

        <h2 className="text-xl font-semibold">Como solicitar a troca:</h2>

        <p className="text-gray-300 leading-relaxed">
          Caso você receba um produto com defeito de fabricação ou diferente do solicitado, siga os passos abaixo:
        </p>

        <h3 className="text-lg font-semibold">Regras para trocas/devoluções:</h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>O produto não pode apresentar indícios de uso.</li>
          <li>Deve ser devolvido com todas as embalagens originais.</li>
          <li>O cliente deve embalar o produto de forma adequada, para evitar danos no transporte.</li>
          <li>Não realizamos trocas de produtos danificados ou modificados pelo cliente.</li>
        </ul>

        <h2 className="text-xl font-semibold">Prazo para solicitação:</h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>
            Se o problema for identificado em até 7 dias úteis após o recebimento, entre em contato imediatamente.
          </li>
          <li>
            Caso ultrapasse os 7 dias úteis e o produto apresente vício ou defeito, é necessário entrar em contato informando: CPF, número do pedido, produto e defeito constatado.
          </li>
          <li>O item passará por análise do nosso setor de qualidade.</li>
          <li>O prazo para análise é de até 7 dias úteis.</li>
          <li>
            Após a verificação, entraremos em contato para informar se a troca será realizada.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">Opções disponíveis ao cliente:</h2>

        <p className="text-gray-300">Constatado o defeito ou problema, você poderá escolher entre:</p>

        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Receber o reembolso do valor pago.</li>
          <li>Receber um novo produto igual ao encomendado.</li>
          <li>Receber um produto de valor semelhante.</li>
        </ul>

        <h2 className="text-xl font-semibold">Direito de arrependimento:</h2>

        <p className="text-gray-300 leading-relaxed">
          Conforme o Código de Defesa do Consumidor (CDC), a solicitação de cancelamento 
          de compras virtuais pode ser feita em até 7 dias corridos após o recebimento do produto.
        </p>

        <h2 className="text-xl font-semibold">Prazos de reembolso:</h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>
            Para estorno em cartão de crédito: nosso setor financeiro processa em até 7 dias úteis junto à operadora. 
            O prazo final para o valor retornar ao cartão é de até 120 dias, dependendo da operadora e fechamento da fatura.
          </li>
          <li>
            Para reembolso em conta corrente: será feito em até 10 dias úteis após a análise, 
            exclusivamente em conta com o mesmo CPF cadastrado no pedido.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">Observações importantes:</h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>
            Produtos devolvidos sem prévia comunicação, fora do prazo, sem etiqueta, nota fiscal 
            ou com divergência nos itens serão automaticamente reenviados ao cliente.
          </li>
          <li>
            Custos de envio em casos não enquadrados nas políticas acima são de responsabilidade do cliente.
          </li>
        </ul>

      </div>
    </div>
  )
}