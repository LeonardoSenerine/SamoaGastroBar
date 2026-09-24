import { abrirPreferencias } from '../consentimento'
import { PaginaLegal } from '../components/PaginaLegal'

const itens = [
  {
    nome: 'samoa-consentimento',
    quem: 'Samoa (este site)',
    tipo: 'Necessário',
    para: 'Guarda a sua escolha sobre cookies, para não perguntar de novo a cada visita.',
    duracao: '12 meses',
  },
  {
    nome: 'NID, AEC, SOCS e similares',
    quem: 'Google (mapa)',
    tipo: 'Mapas, opcional',
    para: 'Gravados pelo Google Maps quando o mapa é carregado: preferências, segurança e funcionamento do mapa.',
    duracao: 'Até 13 meses, conforme o Google',
  },
]

export function Cookies() {
  return (
    <PaginaLegal
      sobretitulo="sem letras miúdas"
      titulo="Política de cookies"
      resumo="Resumo: o site do Samoa não usa cookies de rastreamento, análise ou publicidade. O único serviço externo que grava cookies é o mapa do Google, e ele só carrega com a sua permissão."
    >
      <h2>1. O que são cookies</h2>
      <p>
        Cookies são pequenos arquivos que um site guarda no seu navegador. Aqui também chamamos de cookie o armazenamento
        local do navegador (<em>localStorage</em>), que funciona de forma parecida.
      </p>

      <h2>2. Cookies que usamos</h2>
      <div className="tabela-rolagem">
        <table className="tabela-cookies">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">De quem</th>
              <th scope="col">Categoria</th>
              <th scope="col">Para que serve</th>
              <th scope="col">Duração</th>
            </tr>
          </thead>
          <tbody>
            {itens.map((i) => (
              <tr key={i.nome}>
                <td>
                  <code>{i.nome}</code>
                </td>
                <td>{i.quem}</td>
                <td>{i.tipo}</td>
                <td>{i.para}</td>
                <td>{i.duracao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>3. Serviços de terceiros</h2>
      <ul>
        <li>
          <strong>Google Maps:</strong> só carrega se você aceitar a categoria "Mapas". Sem isso, mostramos um aviso e um
          link para abrir o endereço direto no Google Maps. Detalhes na{' '}
          <a href="https://policies.google.com/technologies/cookies?hl=pt-BR" target="_blank" rel="noreferrer">
            política de cookies do Google
          </a>
          .
        </li>
        <li>
          <strong>Google Fonts:</strong> as fontes do site vêm dos servidores do Google, que recebem seu endereço IP para
          entregar os arquivos, sem gravar cookies.
        </li>
        <li>
          <strong>Links externos:</strong> WhatsApp, Instagram, iFood, Uticket e Google Maps têm as próprias políticas,
          que passam a valer quando você sai do nosso site.
        </li>
      </ul>

      <h2>4. Como mudar sua escolha</h2>
      <p>Você pode mudar ou retirar o consentimento quando quiser:</p>
      <p>
        <button className="botao botao--escuro" onClick={abrirPreferencias}>
          Abrir preferências de cookies
        </button>
      </p>
      <p>
        Também dá para apagar os cookies e os dados do site nas configurações do seu navegador. Depois disso, o aviso
        aparece de novo na próxima visita.
      </p>

      <h2>5. Dúvidas</h2>
      <p>
        Veja a <a href="/privacidade">política de privacidade</a> para saber como tratamos seus dados e como exercer seus
        direitos.
      </p>
    </PaginaLegal>
  )
}
