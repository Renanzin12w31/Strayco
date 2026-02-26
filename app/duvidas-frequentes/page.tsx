export default function DuvidasFrequentes() {
  return (
    <div className="container mx-auto px-6 py-16 text-white">
      <h1 className="text-3xl font-bold mb-10">Dúvidas Frequentes</h1>

      <div className="space-y-10">

        {/* Como comprar */}
        <div>
          <h2 className="text-xl font-semibold mb-3">🛒 Como faço a compra?</h2>
          <p className="text-gray-300 leading-relaxed">
            Escolha o produto desejado, selecione o tamanho e a quantidade e clique em
            <strong> Adicionar ao Carrinho</strong>. Ao clicar em
            <strong> Finalizar Compra</strong>, você será redirecionado para o nosso
            WhatsApp para concluir o pedido de forma rápida e segura.
          </p>
          <p className="text-gray-300 mt-3">
            Nosso atendimento confirmará todos os dados, valores e prazo antes da finalização.
          </p>
        </div>

        {/* Originalidade */}
        <div>
          <h2 className="text-xl font-semibold mb-3">📦 Os produtos são originais?</h2>
          <p className="text-gray-300 leading-relaxed">
            Trabalhamos com produtos de primeira linha, com excelente acabamento,
            materiais de alta qualidade e solas com tecnologia de amortecimento,
            garantindo conforto e desempenho.
          </p>
        </div>

        {/* Prazo */}
        <div>
          <h2 className="text-xl font-semibold mb-3">🚚 Prazo de Entrega</h2>
          <p className="text-gray-300 leading-relaxed">
            Os pedidos são importados sob encomenda.
          </p>
          <p className="text-gray-300 mt-3">
            📌 <strong>Prazo médio estimado: 15 a 25 dias úteis</strong>, podendo variar
            conforme o processo de importação e logística.
          </p>
          <p className="text-gray-300 mt-3">
            Assim que o pedido for enviado, você receberá as informações de acompanhamento.
          </p>
        </div>

        {/* Informação importante */}
        <div>
          <h2 className="text-xl font-semibold mb-3">⚠️ Informação Importante</h2>
          <p className="text-gray-300 leading-relaxed">
            O pedido será realizado utilizando o CPF do cliente. Por se tratar de
            produto importado, o prazo pode sofrer variações.
          </p>
          <p className="text-gray-300 mt-3">
            Ao finalizar a compra, você declara estar ciente dessas condições.
          </p>
        </div>

      </div>
    </div>
  );
}