import SeoHelmet from "../components/SEOHelmet";
import Container from "../components/Container";
import pocPlusOpener from "../assets/img/main/PoCPlusOpener.svg";
import PaymentsOpener from "../assets/img/main/Payments.svg";
import TokenOpener from "../assets/img/main/Tokens.svg";
import ContractOpener from "../assets/img/smartcontracts/SignumProcessor.svg";
import SignumLight from "../assets/img/main/SignumLight.svg";
import { Link } from "react-router-dom";
import BlueHeroVideo from "../components/BlueHeroVideo";
import HDD from "../assets/img/mining/SignumHDD.svg";
import XT from "../assets/img/wallet/XT.png";
import MesssageArt from "../assets/img/messages/Message.svg";
import MesssagSignumSwap from "../assets/img/main/Signum_blue.png";
import Alias from "../assets/img/alias/AliasTeaser.svg";

import SignumVideoTicker from "../components/VideoTicker";
import XTWalletVideo from "../assets/img/video/XTWallet.png";
import AccountHandlingVideo from "../assets/img/video/AccountSetup.webp";
import MiningVideo from "../assets/img/video/Mining.png";
import GPUPlotsVideo from "../assets/img/video/GPUPlots.webp";
import CommitmentVideo from "../assets/img/video/Commitment.png";

const videos = [
  {
    title: "How to use XT-Wallet",
    href: "https://youtu.be/EWVOStOR0Vs",
    thumbnail: XTWalletVideo,
  },
  {
    title: "How to create and set up an account on Signum",
    href: "https://youtu.be/seUnm0GEwXY",
    thumbnail: AccountHandlingVideo,
  },
  {
    title: "How to Mine on the Signum Blockchain",
    href: "https://youtu.be/zeIVCKN6Kpo",
    thumbnail: MiningVideo,
  },
  {
    title: "How to create plots using your GPU",
    href: "https://youtu.be/erTp8J2oVgM",
    thumbnail: GPUPlotsVideo,
  },
  {
    title: "How to manage your Signa commitment",
    href: "https://youtu.be/p-jEkv3aGAs",
    thumbnail: CommitmentVideo,
  },
];

export default function SignumMainPage() {
  return (
    <>
      <SeoHelmet
        title="Signum Network – Powering a calmer kind of crypto"
        description="Sustainable payments, tokens, messages, smart contracts and AI agent infrastructure — secured by disk space since 2014."
        image="https://www.signum.network/og/Signum_blue.png"
        url="https://www.signum.network/"
      />

      <section className="section">
        <BlueHeroVideo />
      </section>

      <section className="section">
        <ProductStrip />
        <FeaturePanels />
        <StatsBand />
        <SignaAISection />
        <Ecosystem />
        <CTA />

        <SignumVideoTicker
          title="Signum Videos"
          subtitle="Short videos to get you from zero to Signum Pro."
          items={videos}
          speed={{ base: 40, md: 30, lg: 60, "2xl": 80 }}
          direction="left"
          pauseOnHover
        />
      </section>
    </>
  );

  function ProductStrip() {
    const items = [
      {
        id: "wallets",
        title: "I want to pay/transfer",
        kicker: "1 · Wallets",
        desc: "Your gateway to SIGNA.",
        cta: "Get a wallet",
        href: "/wallet",
      },
      {
        id: "cex",
        title: "I want to get SIGNA",
        kicker: "2 · Get SIGNA",
        desc: "Buy on an exchange (CEX) — or earn it.",
        cta: "Get SIGNA",
        href: "/exchanges",
      },
      {
        id: "mining",
        title: "I want to mine",
        kicker: "3 · Mining",
        desc: "Put your disk space to work.",
        cta: "Start mining",
        href: "/mining",
      },
    ];

    return (
      <section className="border-t border-neutral-200/80 bg-neutral-50/40">
        <Container className="grid gap-6 py-12 sm:grid-cols-3">
          {items.map((it) => (
            <Link
              to={it.href}
              key={it.id}
              className="group rounded-2xl bg-signum-acqua p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-black/5 transition hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="text-xs uppercase tracking-widest text-signum-midnight">
                {it.kicker}
              </div>

              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-signum-midnight">
                {it.title}
              </h3>

              <p className="mt-2 text-sm text-signum-midnight">{it.desc}</p>

              <div className="mt-4 inline-flex items-center gap-2 text-sm text-signum-midnight">
                <span className="transition group-hover:translate-x-0.5">
                  {it.cta}
                </span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </Container>
      </section>
    );
  }

  function FeaturePanels() {
    const panels = [
      {
        id: "poc",
        title: "Proof-of-Commitment (PoC+)",
        text: "Mine with disk space and boost rewards by committing SIGNA on-chain.",
        bullets: ["Sustainable & fair", "Home-miner friendly", "Battle-tested"],
        img: pocPlusOpener,
      },
      {
        id: "payments",
        title: "Payments, done simply",
        text: "Fast, low-fee transfers with rich attachments and multi-out support.",
        bullets: [
          "Encrypted messaging",
          "Aliases & name system",
          "Multi-out payments",
        ],
        img: PaymentsOpener,
      },
      {
        id: "tokens",
        title: "Smart Tokens",
        text: "Mint assets in minutes. Launch markets on SignumSwap.",
        bullets: [
          "No-code creation",
          "Liquidity & Staking pools",
          "Trustless transfer of token ownership",
          "Distribution to millions of holders with one TX",
        ],
        img: TokenOpener,
      },
      {
        id: "contracts",
        title: "Smart Contracts",
        text: "Self-executing — reliably & on-chain.",
        bullets: [
          "Self-running by design",
          "Persistent Maps (SIP-38) & interoperability",
          "Identical logic by reference (Green Contract)",
          "Fair randomness for games & lotteries",
        ],
        img: ContractOpener,
      },
    ];

    return (
      <section id="learn" className="py-20">
        <Container className="grid gap-10 md:gap-14">
          {panels.map((p, i) => (
            <div
              key={p.id}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                i % 2 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-semibold tracking-tight text-signum-midnight sm:text-4xl">
                  {p.title}
                </h2>

                <p className="mt-4 max-w-xl text-signum-midnight">{p.text}</p>

                <ul className="mt-4 grid gap-2 text-sm text-signum-midnight">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-1 md:order-2">
                <div className="grid aspect-[4/3] place-items-center gap-3 rounded-3xl bg-signum-acqua text-neutral-400 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
                  <img
                    src={p.img}
                    alt="Signum"
                    className="h-full w-full object-contain object-center md:object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>
    );
  }

  function StatsBand() {
    const stats = [
      { label: "Block time", value: "~4 min" },
      { label: "Block max size", value: "375,360 Bytes" },
      { label: "Max STP/s", value: "Up to 5,000" },
      { label: "Min fee", value: "0.01 SIGNA" },
      { label: "Consensus", value: "PoC+" },
    ];

    return (
      <section className="relative overflow-hidden bg-signum-blue text-white">
        <img
          src={SignumLight}
          alt="Signum Power"
          className="pointer-events-none absolute left-0 top-1/2 hidden w-80 -translate-y-1/2 select-none opacity-80 2xl:block"
        />

        <Container className="grid grid-cols-2 justify-center gap-6 py-10 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-semibold tracking-tight">
                {s.value}
              </div>

              <div className="mt-1 text-xs uppercase tracking-widest text-white/70">
                {s.label}
              </div>
            </div>
          ))}
        </Container>

        <img
          src={SignumLight}
          alt="Signum Power"
          className="pointer-events-none absolute right-0 top-1/2 hidden w-80 -translate-y-1/2 scale-x-[-1] select-none opacity-80 2xl:block"
        />
      </section>
    );
  }

  function SignaAISection() {
    const layers = [
      {
        title: "Payments",
        text: "Let AI agents send and receive SIGNA with low fixed fees.",
      },
      {
        title: "Identity",
        text: "Register agents on-chain and build reputation from real activity.",
      },
      {
        title: "Verify",
        text: "Stamp AI outputs on-chain so changes can be detected later.",
      },
      {
        title: "Escrow",
        text: "Lock payments in self-executing smart contracts until work is delivered.",
      },
    ];

    return (
      <section className="bg-neutral-50/60 py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.06)] ring-1 ring-black/5 md:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signum-acqua/80 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-signum-lightacqua/80 blur-3xl" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-signum-acqua px-4 py-2 text-sm font-semibold text-signum-darkblue">
                  <span className="h-2 w-2 rounded-full bg-signum-lightgreen" />
                  Live AI infrastructure on Signum
                </div>

                <h2 className="text-3xl font-semibold tracking-tight text-signum-midnight sm:text-4xl lg:text-5xl">
                  AI can lie.
                  <br />
                  Signum can prove accountability.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-signum-midnight">
                  SignaAI turns Signum into an accountability layer for AI
                  agents: hire, verify and pay autonomous agents on-chain — with
                  proof of who produced what, when it was stamped, and whether
                  payment conditions were met.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://www.signaai.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-signum-midnight px-6 py-3 text-center text-sm font-medium text-white hover:opacity-90"
                  >
                    Explore SignaAI
                  </a>

                  <a
                    href="https://www.signaai.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-neutral-300 px-6 py-3 text-center text-sm font-medium text-signum-midnight hover:bg-neutral-50"
                  >
                    View Live Demo
                  </a>

                  <a
                    href="https://www.signaai.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-neutral-300 px-6 py-3 text-center text-sm font-medium text-signum-midnight hover:bg-neutral-50"
                  >
                    Start Building
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl bg-signum-midnight p-5 text-white shadow-[0_20px_50px_rgba(2,24,81,0.25)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-white/60">
                        Developer Preview
                      </div>

                      <div className="mt-2 text-2xl font-semibold">
                        pip install signaai
                      </div>
                    </div>

                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                      Mainnet
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-black/25 p-4 font-mono text-sm text-signum-lightgreen">
                    <div>$ pip install signaai</div>
                    <div className="mt-1 text-white/60">
                      # build agents that can pay, prove and settle work
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {layers.map((layer) => (
                    <div
                      key={layer.title}
                      className="rounded-2xl bg-signum-acqua/70 p-5 ring-1 ring-signum-blue/10"
                    >
                      <h3 className="font-semibold text-signum-midnight">
                        {layer.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-signum-midnight/80">
                        {layer.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  function Ecosystem() {
    const cards = [
      {
        title: "Wallets",
        desc: "Download XT Wallet and manage your SIGNA securely.",
        href: "/wallet",
        external: false,
        pic: XT,
      },
      {
        title: "Get SIGNA",
        desc: "Buy SIGNA on exchanges or learn other ways to obtain it.",
        href: "/exchanges",
        external: false,
        pic: TokenOpener,
      },
      {
        title: "Mining",
        desc: "Start mining with disk space (PoC+) — pool or solo.",
        href: "/mining",
        external: false,
        pic: HDD,
      },
      {
        title: "Explorer",
        desc: "Track blocks, transactions, aliases, and tokens in real time.",
        href: "https://explorer.signum.network",
        external: true,
        pic: MesssageArt,
      },
      {
        title: "SignumSwap",
        desc: "Swap tokens and access DeFi tools on Signum.",
        href: "https://www.signumswap.com",
        external: true,
        pic: MesssagSignumSwap,
      },
      {
        title: "SignaAI",
        desc: "AI agent payments, verification and escrow on Signum mainnet.",
        href: "https://www.signaai.io/",
        external: true,
        pic: SignumLight,
      },
      {
        title: "Learn",
        desc: "Short guides to get started — wallet, SIGNA, and mining.",
        href: "https://docs.signum.network/signum",
        external: true,
        pic: Alias,
      },
    ];

    type Card = (typeof cards)[number];

    const CardInner = ({ c }: { c: Card }) => (
      <>
        <div className="grid aspect-[3/2] place-items-center overflow-hidden rounded-xl p-6">
          <img
            src={c.pic}
            alt={c.title}
            className="h-full w-full object-contain"
          />
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight">{c.title}</h3>

        <p className="mt-1 text-sm text-neutral-600">{c.desc}</p>

        <div className="mt-3 inline-flex items-center gap-2 text-sm">
          <span className="transition group-hover:translate-x-0.5">Open</span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </>
    );

    return (
      <section id="docs" className="py-20">
        <Container>
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Ecosystem
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-600">
            Everything you need to get started — wallet, SIGNA, mining, AI
            agents, and the essential tools.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c, index) => {
              const isLast = index === cards.length - 1;
              const cardClass = `group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-black/5 transition hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] ${
                isLast ? "lg:col-start-2" : ""
              }`;

              return c.external ? (
                <a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cardClass}
                >
                  <CardInner c={c} />
                </a>
              ) : (
                <Link key={c.title} to={c.href} className={cardClass}>
                  <CardInner c={c} />
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }

  function CTA() {
    return (
      <section id="get-sig" className="py-24">
        <Container className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-signum-midnight sm:text-5xl">
            Start with SIGNA today
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-signum-midnight">
            Download a wallet, get SIGNA, and join a community building
            practical crypto — without the noise.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/wallet"
              key="wallets"
              className="rounded-full bg-signum-midnight px-6 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Download Wallet
            </Link>

            <Link
              to="/exchanges"
              key="exchanges"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              Get SIGNA
            </Link>
          </div>
        </Container>
      </section>
    );
  }
}
