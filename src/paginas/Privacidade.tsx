import { PaginaLegal } from '../components/PaginaLegal'
import { contato, empresa, whatsappUrl } from '../data/site'

export function Privacidade() {
  return (
    <PaginaLegal
      sobretitulo="transparência"
      titulo="Política de privacidade"
      resumo="Resumo: o site do Samoa não tem cadastro, formulário nem rastreamento. Seus dados só chegam até nós quando você fala com a gente pelo WhatsApp ou pelo Instagram, e usamos esses dados apenas para atender o seu pedido."
    >
      <h2>1. Quem somos</h2>
      <p>
        Esta política vale para o site do <strong>{contato.nome}</strong>
        {empresa.razaoSocial && <> ({empresa.razaoSocial})</>}
        {empresa.cnpj && <>, CNPJ {empresa.cnpj}</>}, localizado na {contato.endereco}, {contato.bairro}. Somos o
        controlador dos dados pessoais descritos aqui, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018, LGPD).
      </p>

      <h2>2. Quais dados tratamos</h2>
      <ul>
        <li>
          <strong>Navegação no site:</strong> o site não pede cadastro e não usa ferramentas de análise ou publicidade. A
          hospedagem (Vercel) registra dados técnicos de acesso, como endereço IP, navegador e páginas visitadas, por
          segurança e funcionamento.
        </li>
        <li>
          <strong>Contato e reservas:</strong> quando você nos chama pelo WhatsApp ou Instagram, recebemos seu nome, telefone
          ou perfil e o conteúdo da conversa (data da reserva, número de pessoas, pedido de evento).
        </li>
        <li>
          <strong>Ingressos:</strong> a venda de ingressos é feita pela Uticket, que trata seus dados como controladora
          própria, conforme a política dela.
        </li>
        <li>
          <strong>Mapa:</strong> se você permitir, o mapa do Google é carregado na página e o Google pode receber seu IP e
          gravar cookies. Veja a <a href="/cookies">política de cookies</a>.
        </li>
      </ul>

      <h2>3. Para que usamos</h2>
      <ul>
        <li>Responder mensagens, confirmar reservas e organizar eventos que você pediu (execução de contrato ou procedimentos preliminares, art. 7º, V).</li>
        <li>Manter o site seguro e funcionando (legítimo interesse, art. 7º, IX).</li>
        <li>Carregar o mapa do Google, somente com o seu consentimento (art. 7º, I).</li>
        <li>Cumprir obrigações legais e fiscais, quando houver (art. 7º, II).</li>
      </ul>
      <p>Não vendemos seus dados e não enviamos mensagens de marketing sem você pedir.</p>

      <h2>4. Com quem compartilhamos</h2>
      <p>
        Só com os serviços necessários para o site e o atendimento funcionarem: Vercel (hospedagem), Meta (WhatsApp e
        Instagram), Google (mapa, apenas com consentimento, e fontes do site), Uticket (ingressos) e iFood (pedidos para
        entrega). Alguns desses serviços podem armazenar dados fora do Brasil, com as garantias previstas na LGPD.
      </p>

      <h2>5. Por quanto tempo guardamos</h2>
      <p>
        Conversas de reserva e eventos ficam guardadas pelo tempo necessário para o atendimento e, depois, pelo prazo
        exigido por lei. Registros técnicos da hospedagem seguem os prazos da própria Vercel. A sua escolha sobre cookies
        fica no seu navegador por até 12 meses.
      </p>

      <h2>6. Seus direitos</h2>
      <p>Pela LGPD (art. 18), você pode pedir a qualquer momento:</p>
      <ul>
        <li>confirmação de que tratamos seus dados e acesso a eles;</li>
        <li>correção de dados incompletos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários;</li>
        <li>portabilidade e informação sobre com quem compartilhamos;</li>
        <li>revogação do consentimento, como o do mapa, a qualquer momento.</li>
      </ul>
      <p>
        Você também pode reclamar à Autoridade Nacional de Proteção de Dados (<a href="https://www.gov.br/anpd" target="_blank" rel="noreferrer">ANPD</a>).
      </p>

      <h2>7. Como falar com a gente</h2>
      <p>
        Para qualquer pedido sobre seus dados, fale com o Samoa pelo{' '}
        <a href={whatsappUrl('Olá! Tenho um pedido sobre meus dados pessoais (LGPD).')} target="_blank" rel="noreferrer">
          WhatsApp {contato.whatsappLabel}
        </a>
        {empresa.emailPrivacidade && (
          <>
            {' '}ou pelo e-mail <a href={`mailto:${empresa.emailPrivacidade}`}>{empresa.emailPrivacidade}</a>
          </>
        )}
        . Respondemos em até 15 dias.
      </p>

      <h2>8. Mudanças nesta política</h2>
      <p>Podemos atualizar este texto. A data da última versão fica sempre no topo da página.</p>
    </PaginaLegal>
  )
}
