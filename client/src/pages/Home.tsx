/**
 * Style direction: Caderno de Campo Fluido — editorial de pesquisa aplicada,
 * com margens de rio, evidência rastreável e biomorfismo de dados em verde igarapé.
 */
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  CirclePlay,
  FileText,
  GitBranch,
  Layers3,
  Network,
  ScanSearch,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { useState } from "react";
import "./trajectory.css";
import "./amazo-brand.css";
import "./fern-palette.css";
import "./hero-photo.css";
import "./hero-photo-clean.css";
import "./research-signature.css";
import "./contrast-pass.css";
import "./photo-credit.css";
import "./evidence-artifacts.css";
import "./hub-logo.css";
import "./field-artifacts.css";
import "./ecosystem-links.css";
import "./rag-sources.css";

const publicAsset = (filename: string, manusStoragePath: string) =>
  import.meta.env.VITE_PUBLIC_EXPORT === "true" ? `${import.meta.env.BASE_URL}assets/${filename}` : manusStoragePath;

const assets = {
  // Caderno de Campo Fluido: L1 sustenta presença de marca; L2 contextualiza pesquisa; L3 explica o fluxo RAG.
  amazoHero: publicAsset("amazo-lp-01-hero-peito-limpo.png", "/manus-storage/amazo-lp-01-hero-peito-limpo_37318e92.png"),
  amazoProcess: publicAsset("amazo-lp-02-caderno-peito-limpo.png", "/manus-storage/amazo-lp-02-caderno-peito-limpo_aaa1efee.png"),
  amazoFlow: publicAsset("amazo-lp-03-fluxo-peito-limpo.png", "/manus-storage/amazo-lp-03-fluxo-peito-limpo_0cc09b91.png"),
  fernPhoto: publicAsset("samambaia-amazonas-autoral.webp", "/manus-storage/samambaia-amazonas-autoral_bda4bba4.webp"),
  hubLogoTransparent: publicAsset("hub-encontro-dagua-logo-transparent.png", "/manus-storage/hub-encontro-dagua-logo-transparent_82a1e28a.png"),
  hubLogoLight: publicAsset("hub-encontro-dagua-logo-light.png", "/manus-storage/hub-encontro-dagua-logo-light_04169e54.png"),
};

const evidenceItems = [
  {
    id: "sources",
    kicker: "CATÁLOGO / FONTES RAG",
    title: "Base autorizada, não acervo inteiro",
    description:
      "A Amazô consultará somente documentos de verdade em construção para a trajetória, o Hub, o Hub OS, as ofertas e os processos. Cada entrada precisa de versão, responsável e autorização da Lídi.",
    status: "Curadoria humana em andamento",
    icon: BookOpen,
  },
  {
    id: "agent",
    kicker: "EVIDÊNCIA 01",
    title: "Conversa do agente",
    description:
      "Prints de perguntas válidas, recuperação de fontes e comportamento de recusa para assuntos sem evidência suficiente.",
    status: "Aguardando captura",
    icon: ScanSearch,
  },
  {
    id: "tests",
    kicker: "EVIDÊNCIA 02",
    title: "Caderno de testes",
    description:
      "Registro de perguntas diretas, cruzamento de fontes, variações de linguagem e testes contra alucinação.",
    status: "Estrutura definida",
    icon: ScrollText,
  },
  {
    id: "video",
    kicker: "EVIDÊNCIA 03",
    title: "Demonstração em vídeo",
    description:
      "Espaço para um vídeo curto que percorre a base documental, a resposta rastreável e a experiência do usuário.",
    status: "Reservado para gravação",
    icon: CirclePlay,
  },
];

const roadmap = [
  {
    label: "RAIZ",
    title: "Amazô nasce como representante digital",
    text: "A identidade da Amazô é construída para acolher, explicar soluções do Hub e aproximar tecnologia de pessoas e negócios reais.",
    tone: "raiz",
  },
  {
    label: "MVP",
    title: "Showcase Typebot e SDR digital",
    text: "A primeira versão pública une recepção 24/7, qualificação inicial, handoff humano e um showcase documentado como portfólio vivo.",
    tone: "mvp",
  },
  {
    label: "ECOSSISTEMA",
    title: "Conexão com Hub, Link d’Água e CRM",
    text: "A Amazô passa a orientar experiências de presença digital e captação, enquanto os dados operacionais permanecem sob controles de produto e segurança.",
    tone: "ecossistema",
  },
  {
    label: "CHALLENGE G10",
    title: "Agente documental com fonte e limite",
    text: "A nova versão concentra o desafio acadêmico: recuperar contexto autorizado, responder com rastreabilidade e recusar quando não houver evidência.",
    tone: "atual",
  },
  {
    label: "EVOLUÇÃO PROTEGIDA",
    title: "RAG aprovado e handoff controlado",
    text: "A integração futura depende de documentos versionados, RLS, RBAC, idempotência, feature flag, rollback e aprovação humana.",
    tone: "futuro",
  },
];

const ecosystemLinks = [
  {
    kicker: "MVP TÉCNICO / G10",
    title: "Amazô.guia",
    description: "Repositório do agente documental, código e evidências do Challenge G10.",
    href: "https://github.com/lidimoura/amazo-guia-g10",
    icon: FileText,
  },
  {
    kicker: "ORIGEM PÚBLICA / TYPEBOT",
    title: "Showcase Amazô.IA",
    description: "Versão histórica da Amazô como recepção e SDR digital do Hub.",
    href: "https://lidimoura.github.io/amazo.ia-showcase/",
    icon: CirclePlay,
  },
  {
    kicker: "CÓDIGO / TYPEBOT",
    title: "Repositório do showcase histórico",
    description: "Registro da origem visual e conversacional, separado do MVP RAG.",
    href: "https://github.com/lidimoura/amazo.ia-showcase",
    icon: GitBranch,
  },
  {
    kicker: "MÉTODO / HOLDING",
    title: "Hub OS",
    description: "Protocolo de diagnóstico, arquitetura, QA e documentação da Holding AI-Native.",
    status: "Repositório oficial · acesso restrito",
    icon: ShieldCheck,
  },
  {
    kicker: "TRAJETÓRIA PROFISSIONAL",
    title: "LinkedIn da Lídi",
    description: "Dados, IA, automação e impacto social na trajetória profissional.",
    href: "https://www.linkedin.com/in/lidimoura/",
    icon: ArrowUpRight,
  },
  {
    kicker: "PORTFÓLIO / LINK D’ÁGUA",
    title: "Portfólio profissional",
    description: "Projetos, formação e ofertas organizados no Link d’Água.",
    href: "https://link.encontrodagua.com/r/portifolio-lidimoura",
    icon: ArrowUpRight,
  },
  {
    kicker: "SHOWCASE / CÓDIGO PÚBLICO",
    title: "Repositório desta LP",
    description: "Código, documentação editorial e histórico de publicação do showcase.",
    href: "https://github.com/lidimoura/amazo-g10-showcase",
    icon: GitBranch,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-label-dot" />
      {children}
    </div>
  );
}

function RouteMarker({ code, label }: { code: string; label: string }) {
  return <div className="field-route-marker" aria-hidden="true"><span>{code}</span><i /><small>{label}</small></div>;
}

export default function Home() {
  const [activeEvidence, setActiveEvidence] = useState(evidenceItems[0]);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#102b27] text-[#f4f0e6]">
      <header className="site-header">
        <a className="brand-lockup" href="#inicio" aria-label="Amazô G10 — início">
          <span className="brand-avatar"><img src={assets.amazoHero} alt="Amazô" /></span>
          <span>
            <strong>Amazô</strong>
            <small>G10 / showcase</small>
          </span>
          <span className="brand-record">ARQ / 01</span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#processo">Processo</a>
          <a href="#trajetoria">Trajetória</a>
          <a href="#arquitetura">Arquitetura</a>
          <a href="#evidencias">Evidências</a>
          <a href="#ecossistema">Ecossistema</a>
          <a href="#proximos-passos">Evolução</a>
        </nav>

        <a className="header-cta" href="#evidencias">
          Ver caderno <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>

      <main className="page-current">
        <svg className="current-spine" viewBox="0 0 120 5000" preserveAspectRatio="none" aria-hidden="true">
          <path d="M92 0 C24 170 112 330 47 520 S114 880 45 1120 S104 1450 38 1740 S108 2110 42 2390 S98 2700 35 3060 S106 3430 44 3760 S105 4160 45 4500 S93 4780 30 5000" />
          <circle cx="47" cy="520" r="5" /><circle cx="38" cy="1740" r="5" /><circle cx="42" cy="2390" r="5" /><circle cx="44" cy="3760" r="5" />
        </svg>
        <section id="inicio" className="hero-section hero-amazo hero-photo" style={{ backgroundImage: `url(${assets.fernPhoto})` }}>
          <div className="hero-layout">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, ease: [0.23, 1, 0.32, 1] }}
            >
              <SectionLabel>Challenge G10 · agente documental</SectionLabel>
              <h1>
                Um agente não é só a resposta.
                <em> É a evidência que sustenta cada resposta.</em>
              </h1>
              <p className="hero-lede">
                Amazô é uma proposta de agente RAG com fonte, limite e rastreabilidade — construída como MVP acadêmico e registrada como ativo de pesquisa aplicada da Holding AI-Native Encontro d’Água.
              </p>

              <div className="hero-actions">
                <a className="button-primary" href="#evidencias">
                  Ver evidências registradas <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="button-text" href="#arquitetura">
                  Ver método e limites <Waypoints size={16} aria-hidden="true" />
                </a>
              </div>

              <div className="hero-status">
                <span className="pulse-dot" />
                <span>MVP acadêmico · escopo isolado · transparência por design</span>
              </div>
            </motion.div>

              <div className="hero-showcase-stack">
                <div className="hero-amazo-portrait" aria-hidden="true">
                  <img src={assets.amazoHero} alt="" />
                </div>
              <motion.aside
                className="field-note"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.66, delay: 0.14, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="field-note-top">
                  <span>caderno de campo / 01</span>
                  <span>•</span>
                  <span>G10</span>
                </div>
                <div className="field-note-rule" />
                <p className="field-note-lead">O que esta página prova</p>
                <ul>
                  <li><CheckCircle2 size={16} /> Fonte documental autorizada</li>
                  <li><CheckCircle2 size={16} /> Resposta com rastreabilidade</li>
                  <li><CheckCircle2 size={16} /> Testes e limites visíveis</li>
                </ul>
                <div className="field-note-footer">
                  <span>integração produtiva</span>
                  <strong>proposta futura</strong>
                </div>
              </motion.aside>
            </div>
          </div>
          <p className="hero-photo-credit">Fotografia autoral · Lídi Moura · Amazonas, Brasil</p>
        </section>

        <section id="processo" className="intro-section">
          <div className="page-rail" aria-hidden="true"><span>01</span><i /></div>
          <div className="intro-grid">
            <div className="intro-title-block">
              <SectionLabel>Pesquisa aplicada, não caixa-preta</SectionLabel>
              <h2>O Challenge vira uma entrega. A entrega vira uma prova de método.</h2>
            </div>
            <div className="intro-body">
              <p>
                Esta LP documenta como a Amazô foi organizada para consultar uma base documental, recuperar contexto pertinente e responder somente quando houver evidência suficiente. O objetivo é tornar visível tanto a experiência do agente quanto o processo que protege sua qualidade.
              </p>
              <p>
                O Hub OS entra como sistema de trabalho: diagnóstico, decisões registradas, arquitetura mínima, QA e caderno de evidências. A autoria, os critérios e a aprovação final permanecem humanos.
              </p>
              <a href="#hub-os" className="inline-link">Conhecer o uso do Hub OS <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="signal-section signal-amazo">
          <RouteMarker code="01" label="dados de partida" />
          <div className="signal-intro">
            <SectionLabel>Dados de partida</SectionLabel>
            <h2>Métricas que distinguem fato, arquitetura e próxima validação.</h2>
            <p>Os indicadores abaixo não simulam performance. Eles deixam explícito o que já foi catalogado, o que foi desenhado e o que ainda precisa ser medido no ambiente do agente.</p>
          </div>
          <div className="metric-grid">
            <article className="metric-card metric-card-strong">
              <span className="metric-eyebrow">CATÁLOGO EM CONSTRUÇÃO</span>
              <strong>09</strong>
              <p>núcleos documentais previstos para a fonte de verdade da Amazô.</p>
              <span className="metric-proof">Curadoria sob aprovação da CEO</span>
            </article>
            <article className="metric-card">
              <span className="metric-eyebrow">ARQUITETURA PROPOSTA</span>
              <strong>4</strong>
              <p>camadas de verdade: negócio, institucional, operacional e memória.</p>
              <span className="metric-proof metric-proof-warm">Decisão arquitetural</span>
            </article>
            <article className="metric-card">
              <span className="metric-eyebrow">DADO PROTEGIDO</span>
              <strong>0</strong>
              <p>dados de clientes incluídos no MVP acadêmico demonstrado.</p>
              <span className="metric-proof">Limite confirmado</span>
            </article>
            <article className="metric-card metric-card-method">
              <span className="metric-eyebrow">PRÓXIMA MEDIÇÃO</span>
              <div className="method-list">
                <span>Groundedness</span><span>Recusa</span><span>Latência</span><span>Custo</span>
              </div>
              <p>Critérios de qualidade previstos para o ciclo de QA do agente.</p>
            </article>
          </div>
        </section>

        <section id="arquitetura" className="architecture-section">
          <RouteMarker code="02" label="rota de recuperação" />
          <div className="page-rail light" aria-hidden="true"><span>02</span><i /></div>
          <div className="architecture-heading">
            <div>
              <SectionLabel>Arquitetura explicável</SectionLabel>
              <h2>Da fonte aprovada à resposta fundamentada.</h2>
            </div>
            <p>Um fluxo simples o bastante para demonstrar no Challenge e rigoroso o bastante para servir de base a uma evolução posterior da Amazô.</p>
          </div>

          <div className="architecture-composition">
            <div className="architecture-map">
              <div className="map-node map-node-source">
                <span className="node-index">01</span>
                <BookOpen size={22} />
                <div><strong>Base autorizada</strong><small>documentos + metadados</small></div>
              </div>
              <div className="map-connector"><span>normaliza</span></div>
              <div className="map-node map-node-retrieval">
                <span className="node-index">02</span>
                <ScanSearch size={22} />
                <div><strong>Recuperação</strong><small>contexto pertinente</small></div>
              </div>
              <div className="map-connector"><span>fundamenta</span></div>
              <div className="map-node map-node-answer">
                <span className="node-index">03</span>
                <BrainCircuit size={22} />
                <div><strong>Resposta</strong><small>fonte + limite</small></div>
              </div>
              <div className="map-note">O agente declara ausência de evidência quando a base não sustenta a pergunta.</div>
            </div>
            <div className="atlas-card">
              <img src={assets.amazoFlow} alt="" aria-hidden="true" />
              <div className="atlas-card-copy">
                <span>origem / amazô</span>
                <strong>Conhecimento também se cultiva.</strong>
                <p>Fonte aprovada, versão identificável e recuperação contextual.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="evidencias" className="evidence-section">
          <RouteMarker code="03" label="fontes e evidências" />
          <div className="evidence-heading">
            <div>
              <SectionLabel>Catálogo e evidências</SectionLabel>
              <h2>O RAG só responde com o que foi autorizado.</h2>
            </div>
            <p>Esta área separa a pesquisa que orienta o projeto dos documentos que poderão se tornar fonte de verdade do agente. Prints, vídeo e testes entram depois da sua curadoria e aprovação de publicação.</p>
          </div>

          <div className="evidence-workbench">
            <div className="evidence-tabs" role="tablist" aria-label="Tipos de evidência">
              {evidenceItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.id === activeEvidence.id;
                return (
                  <button
                    key={item.id}
                    className={`evidence-tab ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveEvidence(item)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <Icon size={18} />
                    <span>{item.title}</span>
                    <ArrowRight size={15} className="tab-arrow" />
                  </button>
                );
              })}
            </div>

            <div className="evidence-stage">
              <img className="evidence-amazo-portrait" src={assets.amazoProcess} alt="" aria-hidden="true" />
              <div className="evidence-stage-wash" />
              <aside className="evidence-audit-strip" aria-label="Índice de artefatos de validação">
                <span>BASE / 09 núcleos</span>
                <span>REGRA / versão + responsável</span>
                <span>QA / roteiro definido</span>
              </aside>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEvidence.id}
                  className="evidence-stage-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                >
                  <span className="stage-kicker">{activeEvidence.kicker}</span>
                  <activeEvidence.icon size={30} strokeWidth={1.5} />
                  <h3>{activeEvidence.title}</h3>
                  <p>{activeEvidence.description}</p>
                  {activeEvidence.id === "sources" && (
                    <>
                      <div className="rag-source-catalog" aria-label="Núcleos da fonte de verdade em construção">
                        <div><span>01–03</span><strong>Identidade</strong><small>trajetória, Hub e Hub OS</small></div>
                        <div><span>04–06</span><strong>Oferta</strong><small>produtos, serviços e regras</small></div>
                        <div><span>07–08</span><strong>Operação</strong><small>processos e portfólio</small></div>
                        <div><span>00</span><strong>Governança</strong><small>índice, status e política de atualização</small></div>
                      </div>
                      <ul className="rag-source-scope" aria-label="Regras públicas das fontes do RAG">
                        <li><strong>Entra:</strong> somente documento aprovado, com versão, responsável e finalidade de resposta.</li>
                        <li><strong>Fica fora:</strong> CRM, dados pessoais, material de pesquisa e conteúdo confidencial.</li>
                      </ul>
                    </>
                  )}
                  <div className="stage-status"><span />{activeEvidence.status}</div>
                  <button className="stage-placeholder" type="button">
                    <CirclePlay size={17} /> Área reservada para mídia aprovada
                  </button>
                </motion.div>
              </AnimatePresence>
              <aside className="evidence-method-artifact" aria-label="Registro de validação disponível">
                <span>governança / rag</span>
                <strong>Fonte de verdade</strong>
                <p>Documentos permitidos, com dono, versão e finalidade de uso.</p>
                <small>Próximo artefato: catálogo aprovado, pergunta, fonte recuperada e decisão de resposta.</small>
              </aside>
              <div className="evidence-crop-note"><CameraIcon /> print · vídeo · log de teste</div>
            </div>
          </div>
        </section>

        <section id="hub-os" className="hub-os-section">
          <RouteMarker code="04" label="protocolo de trabalho" />
          <div className="hub-os-title-wrap">
            <SectionLabel>Hub OS como método</SectionLabel>
            <h2>Acelerar não é automatizar a autoria.</h2>
            <p>O Hub OS organiza decisões, fontes e entregáveis para que o desenvolvimento avance com rastreabilidade. A CEO define objetivo, escopo e aprovações; o sistema sustenta o processo.</p>
          </div>
          <div className="hub-os-flow">
            <div className="hub-os-step"><span>01</span><GitBranch size={22} /><strong>Diagnóstico</strong><small>objetivo, estágio e bloqueios</small></div>
            <div className="hub-os-line" />
            <div className="hub-os-step"><span>02</span><Layers3 size={22} /><strong>Arquitetura</strong><small>MVP, riscos e decisões</small></div>
            <div className="hub-os-line" />
            <div className="hub-os-step"><span>03</span><Network size={22} /><strong>Desenvolvimento</strong><small>incrementos testáveis</small></div>
            <div className="hub-os-line" />
            <div className="hub-os-step"><span>04</span><ShieldCheck size={22} /><strong>QA + entrega</strong><small>evidência, DEVLOG e limites</small></div>
          </div>
          <div className="hub-os-note">
            <Sparkles size={18} />
            <p><strong>Transparência de uso:</strong> o Hub OS foi usado como protocolo de organização e qualidade do Challenge; ele não substitui a autoria humana nem concede acesso automático a dados de produção.</p>
          </div>
        </section>

        <section id="trajetoria" className="trajectory-section">
          <RouteMarker code="05" label="arquivo de autoria" />
          <div className="trajectory-heading">
            <div>
              <SectionLabel>Autoria, trajetória e inspiração</SectionLabel>
              <h2>A Amazô cresce junto com uma trajetória que conecta comportamento, cuidado e engenharia.</h2>
            </div>
            <p>
              Não é uma personagem solta em uma interface. Amazô representa digitalmente o Encontro d’Água Hub e carrega a intenção de tornar a tecnologia mais acessível, humana e regenerativa.
            </p>
          </div>

          <div className="trajectory-composition">
            <figure className="amazo-portrait-card">
              <div className="portrait-frame">
                <img src={assets.amazoHero} alt="Representação digital da Amazô, representante do Encontro d’Água Hub" />
              </div>
            </figure>

            <div className="trajectory-copy">
              <p className="trajectory-identity">Lídi Moura · Arquiteta de Soluções, Especialista em Dados e IA e CEO do Hub Encontro d’Água.</p>
              <p>
                Com formação em Psicologia e mais de uma década de experiência em Customer Success, Lídi construiu sua transição para tecnologia unindo comportamento humano, UX e desenvolvimento de software. O Hub nasce desse encontro: entender pessoas, organizar processos e transformar complexidade em soluções utilizáveis.
              </p>
              <p>
                A formação em Data Science pelo programa ONE e a especialização contínua em IA ampliam esse repertório. No G10, essa evolução ganha uma nova evidência: a Amazô deixa de ser apenas uma recepção digital e passa a ser investigada como agente documental com RAG, fontes explícitas e critérios de qualidade.
              </p>
              <div className="trajectory-tags" aria-label="Pilares da trajetória profissional">
                <span>Psicologia + UX</span>
                <span>Customer Success</span>
                <span>Dados + IA</span>
                <span>Arquitetura de soluções</span>
              </div>
            </div>
          </div>

          <div className="authorship-manifesto">
            <div className="manifesto-title">
              <Sparkles size={22} />
              <div>
                <span>Transparência de autoria</span>
                <h3>IA-Native não significa autoria terceirizada.</h3>
              </div>
            </div>
            <p>
              A Holding AI-Native é uma infraestrutura de trabalho criada pela Lídi para acelerar pesquisa, documentação, prototipação e QA. Os agentes e IAs do ecossistema são definidos, treinados, validados e orquestrados por ela; a IA apoia a execução, mas não substitui a responsabilidade sobre problema, estratégia, regras de negócio, ética ou aprovação final.
            </p>
            <div className="authorship-grid">
              <div><span>01</span><strong>Define o problema</strong><small>contexto, público e critério de sucesso</small></div>
              <div><span>02</span><strong>Orquestra o método</strong><small>fontes, ferramentas, prompts e limites</small></div>
              <div><span>03</span><strong>Valida a entrega</strong><small>QA, evidências, ética e aprovação humana</small></div>
            </div>
          </div>
        </section>

        <section id="proximos-passos" className="roadmap-section">
          <RouteMarker code="06" label="evolução documentada" />
          <div className="roadmap-heading">
            <SectionLabel>Do laboratório ao produto</SectionLabel>
            <h2>Uma linha de evolução sem atalhos entre a primeira versão e o Challenge.</h2>
          </div>
          <div className="roadmap-list">
            {roadmap.map((item, index) => (
              <article className={`roadmap-item roadmap-${item.tone}`} key={item.label}>
                <div className="roadmap-number">0{index + 1}</div>
                <div><span>{item.label}</span><h3>{item.title}</h3></div>
                <p>{item.text}</p>
                <ArrowUpRight size={20} />
              </article>
            ))}
          </div>
          <div className="roadmap-footnote">
            <FileText size={16} />
            <span>Integrações com Typebot, CRM e Supabase permanecem como proposta até inventário técnico, testes e aprovação humana.</span>
          </div>
        </section>

        <section id="ecossistema" className="ecosystem-section">
          <RouteMarker code="07" label="percurso público" />
          <div className="ecosystem-heading">
            <div>
              <SectionLabel>Ecossistema e referências</SectionLabel>
              <h2>Cada link tem um escopo. Cada escopo tem um lugar.</h2>
            </div>
            <p>
              O Challenge documenta o agente RAG; o showcase Typebot preserva a origem da Amazô; o Hub OS sustenta o método; e a trajetória profissional permanece acessível pelos canais públicos da Lídi.
            </p>
          </div>
          <div className="ecosystem-link-grid">
            {ecosystemLinks.map((item) => {
              const Icon = item.icon;
              const content = <>
                <div className="ecosystem-link-top"><Icon size={19} aria-hidden="true" /><span>{item.kicker}</span></div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
                {item.href ? <span className="ecosystem-link-action">Abrir destino <ArrowUpRight size={16} aria-hidden="true" /></span> : <span className="ecosystem-link-status">{item.status}</span>}
              </>;
              return item.href ? (
                <a key={item.title} className="ecosystem-link-card" href={item.href} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                <article key={item.title} className="ecosystem-link-card ecosystem-link-card-restricted">
                  {content}
                </article>
              );
            })}
          </div>
          <p className="ecosystem-note">O código desta LP está disponível em repositório público separado, preservando a autonomia entre o showcase visual e o MVP técnico do Challenge.</p>
        </section>

        <section className="closing-section">
          <div className="closing-copy">
            <SectionLabel>Portfólio vivo</SectionLabel>
            <h2>Construindo IA que respeita a fonte, o contexto e as pessoas.</h2>
          </div>
          <a className="closing-cta" href="#inicio">
            Voltar ao início <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><span className="footer-avatar"><img src={assets.amazoHero} alt="" /></span><span>Amazô G10</span><span className="footer-hub-signature"><img src={assets.hubLogoTransparent} alt="Logotipo do Hub Encontro d’Água" /><span>Hub Encontro d’Água</span></span></div>
        <p>Showcase em construção — evidências de execução serão adicionadas após curadoria.</p>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

function CameraIcon() {
  return <span className="camera-box" aria-hidden="true">▣</span>;
}
