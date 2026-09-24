import { useState } from 'react'
import { fecharPreferencias, salvarConsentimento, useConsentimento } from '../consentimento'

/** Aviso de cookies + painel de preferências. Não aparece no HTML pré-renderizado. */
export function AvisoCookies() {
  const { consentimento, preferenciasAbertas } = useConsentimento()

  // servidor/hidratação: ainda não sabemos a escolha
  if (consentimento === undefined) return null
  if (consentimento && !preferenciasAbertas) return null

  // `key` recria o painel a cada abertura, já com a escolha salva
  return (
    <Painel
      key={preferenciasAbertas ? 'preferencias' : 'primeira-visita'}
      mapasInicial={consentimento?.mapas ?? false}
      reaberto={preferenciasAbertas}
    />
  )
}

function Painel({ mapasInicial, reaberto }: { mapasInicial: boolean; reaberto: boolean }) {
  const [detalhado, setDetalhado] = useState(reaberto)
  const [mapas, setMapas] = useState(mapasInicial)

  return (
    <div className={`aviso-cookies ${detalhado ? 'aviso-cookies--detalhado' : ''}`} role="dialog" aria-labelledby="aviso-cookies-titulo" aria-live="polite">
      <div className="aviso-cookies__caixa">
        <h2 id="aviso-cookies-titulo">Cookies no Samoa</h2>
        <p>
          O site não usa cookies de rastreamento. O único serviço externo que grava cookies é o <strong>mapa do Google</strong>,
          e ele só carrega se você permitir. Detalhes na <a href="/cookies">política de cookies</a> e na{' '}
          <a href="/privacidade">política de privacidade</a>.
        </p>

        {detalhado && (
          <ul className="preferencias">
            <li>
              <div>
                <h3>Necessários</h3>
                <p>Guardam só a sua escolha sobre cookies, no seu próprio navegador. Sempre ativos.</p>
              </div>
              <span className="chave chave--fixa">
                <input type="checkbox" checked disabled aria-label="Cookies necessários (sempre ativos)" />
                <span aria-hidden="true" />
              </span>
            </li>
            <li>
              <div>
                <h3>Mapas (Google Maps)</h3>
                <p>Mostra o mapa com a localização do Samoa. O Google pode gravar cookies e receber seu endereço IP.</p>
              </div>
              <label className="chave">
                <input type="checkbox" checked={mapas} onChange={(e) => setMapas(e.target.checked)} aria-label="Permitir mapa do Google" />
                <span aria-hidden="true" />
              </label>
            </li>
          </ul>
        )}

        <div className="aviso-cookies__acoes">
          {detalhado ? (
            <>
              {reaberto && (
                <button className="aviso-cookies__link" onClick={fecharPreferencias}>
                  Cancelar
                </button>
              )}
              <button className="botao botao--claro botao--pequeno" onClick={() => salvarConsentimento(mapas)}>
                Salvar preferências
              </button>
              <button className="botao botao--pequeno" onClick={() => salvarConsentimento(true)}>
                Aceitar todos
              </button>
            </>
          ) : (
            <>
              <button className="aviso-cookies__link" onClick={() => setDetalhado(true)}>
                Personalizar
              </button>
              <button className="botao botao--claro botao--pequeno" onClick={() => salvarConsentimento(false)}>
                Só necessários
              </button>
              <button className="botao botao--pequeno" onClick={() => salvarConsentimento(true)}>
                Aceitar todos
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
