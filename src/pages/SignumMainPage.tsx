import SeoHelmet from "../components/SEOHelmet";
import Container from "../components/Container";
import { Link } from "react-router-dom";

import HeroSignum from "../components/HeroSignum";
import FeatureImageCard from "../components/FeatureImageCard";
import type { FeatureCard } from "../components/FeatureImageCard";
import SignumVideoTicker from "../components/VideoTicker";

import featurePayments from "../assets/img/landing/feature-payments.png";
import featureWallets from "../assets/img/landing/feature-wallets.png";
import featureMining from "../assets/img/landing/feature-mining.png";
import featureContracts from "../assets/img/landing/feature-contracts.png";
import featureSustainability from "../assets/img/landing/feature-sustainability.png";
import featureEcosystem from "../assets/img/landing/feature-ecosystem.png";
import heroIsometric from "../assets/img/landing/hero-isometric.png";

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
        title="Signum Network – Built for utility. Designed to last."
        description="Sustainable blockchain infrastructure powering payments, smart contracts, tokens and autonomous agents — secured by disk space with Proof-of-Commitment since 2014."
        image="https://www.signum.network/og/Signum_blue.png"
        url="https://www.signum.network/"
      />

      <div className="relative z-10 bg-night text-ink-100">
        <HeroSignum />
        <StatsBand />
        <FeatureGrid />
        <SignaAISection />
        <Ecosystem />
        <SignumVideoTicker
          title="Guides, tutorials & insights"
          subtitle="Short videos to get you from zero to Signum Pro."
          items={videos}
          speed={{ base: 40, md: 30, lg: 60, "2xl": 80 }}
          direction="left"
          pauseOnHover
        />
        <CTA />
      </div>
    </>
  );
}

function StatsBand() {
  const stats = [
    { value: "~4 min", label: "Block time" },
    { value: "375,360 Bytes", label: "Max block size" },
    { value: "Up to 5,000", label: "Max STP / sec" },
    { value: "0.01 SIGNA", label: "Min fee" },
    { value: "PoC+", label: "Consensus" },
    { value: "10+ Years", label: "Proven & reliable" },
  ];

  return (
    <section className="border-y border-white/10 bg-night-2">
      <Container>
        <ul className="grid grid-cols-2 divide-x divide-white/5 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <li key={s.label} className="px-4 py-7 text-center">
              <div className="text-xl font-semibold tracking-tight text-ink-100 sm:text-2xl">
                {s.value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-ink-400">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function FeatureGrid() {
  const cards: FeatureCard[] = [
    {
      title: "Proof-of-Commitment (PoC+)",
      desc: "Mine with disk space and boost rewards by committing SIGNA on-chain — sustainable, fair and battle-tested.",
      img: heroIsometric,
      to: "/pocplus",
      wide: true,
    },
    {
      title: "Payments",
      desc: "Fast, low-fee transfers with rich attachments, aliases and multi-out support.",
      img: featurePayments,
      to: "/payments",
    },
    {
      title: "Wallets",
      desc: "Secure, simple and powerful wallets for everyone — desktop, mobile and hardware.",
      img: featureWallets,
      to: "/wallet",
    },
    {
      title: "Mining",
      desc: "Home-miner friendly, efficient and sustainable. Put your disk space to work with PoC+.",
      img: featureMining,
      to: "/mining",
    },
    {
      title: "Smart Contracts",
      desc: "Build powerful dApps with self-executing contracts that run reliably on-chain.",
      img: featureContracts,
      to: "/smartcontracts",
    },
    {
      title: "Sustainability",
      desc: "Built by design for a greener future — secured by disk space, not wasted energy.",
      img: featureSustainability,
      to: "/pocplus",
    },
    {
      title: "Ecosystem",
      desc: "Wallets, exchanges, DeFi, NFTs, AI and the partners building on Signum.",
      img: featureEcosystem,
      href: "#ecosystem",
      wide: true,
    },
  ];

  return (
    <section id="features" className="scroll-mt-16 bg-night py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="kicker-blue">Powering real-world crypto</div>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
              Everything you need to{" "}
              <span className="text-signum-blue">build</span> and{" "}
              <span className="text-signum-blue">grow</span>.
            </h2>
            <p className="mt-3 max-w-2xl text-ink-300">
              From fast payments to smart contracts and mining — the building
              blocks for sustainable blockchain innovation.
            </p>
          </div>
          <a
            href="https://docs.signum.network/signum"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline shrink-0"
          >
            Explore all features
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <FeatureImageCard key={c.title} c={c} />
          ))}
        </div>
      </Container>
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
    <section className="bg-night py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-night-2 p-6 ring-1 ring-white/10 md:p-10 lg:p-12">
          <div className="glow-blob -right-24 -top-24 h-72 w-72" />
          <div className="glow-blob -bottom-24 -left-24 h-72 w-72 opacity-70" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-signum-blue/15 px-4 py-2 text-sm font-semibold text-signum-blue ring-1 ring-signum-blue/30">
                <span className="h-2 w-2 rounded-full bg-signum-lightgreen" />
                Live AI infrastructure on Signum
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl lg:text-5xl">
                AI can lie.
                <br />
                <span className="text-signum-blue">
                  Signum can prove accountability.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-300">
                SignaAI turns Signum into an accountability layer for AI agents:
                hire, verify and pay autonomous agents on-chain — with proof of
                who produced what, when it was stamped, and whether payment
                conditions were met.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.signaai.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Explore SignaAI
                </a>
                <a
                  href="https://www.signaai.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  View live demo
                </a>
                <a
                  href="https://www.signaai.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Start building
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl bg-night p-5 text-ink-100 ring-1 ring-white/10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-400">
                      Developer Preview
                    </div>
                    <div className="mt-2 text-2xl font-semibold">
                      pip install signaai
                    </div>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-ink-300">
                    Mainnet
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-black/40 p-4 font-mono text-sm text-signum-lightgreen">
                  <div>$ pip install signaai</div>
                  <div className="mt-1 text-ink-400">
                    # build agents that can pay, prove and settle work
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {layers.map((layer) => (
                  <div key={layer.title} className="card-dark p-5">
                    <h3 className="font-semibold text-ink-100">
                      {layer.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">
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

const EcoIcon = ({ d }: { d: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    {d.split("|").map((p, i) => (
      <path key={i} d={p} />
    ))}
  </svg>
);

function Ecosystem() {
  const cards: {
    title: string;
    desc: string;
    href: string;
    to?: string;
    external: boolean;
    icon: string;
  }[] = [
    {
      title: "Wallets",
      desc: "Download XT Wallet and manage your SIGNA securely.",
      to: "/wallet",
      href: "/wallet",
      external: false,
      icon: "M3 7.5A2.5 2.5 0 0 1 5.5 5H18a2 2 0 0 1 2 2v1|M3 7.5V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a1 1 0 0 0-1-1h-4a2 2 0 1 0 0 4h4",
    },
    {
      title: "Get SIGNA",
      desc: "Buy SIGNA on exchanges or learn other ways to obtain it.",
      to: "/exchanges",
      href: "/exchanges",
      external: false,
      icon: "M12 3v18|M8 7h6.5a3.5 3.5 0 0 1 0 7H7|M9 14h7.5a3.5 3.5 0 0 1 0 7H8",
    },
    {
      title: "Mining",
      desc: "Start mining with disk space (PoC+) — pool or solo.",
      to: "/mining",
      href: "/mining",
      external: false,
      icon: "M4 7a8 3 0 0 0 16 0a8 3 0 0 0-16 0|M4 7v5a8 3 0 0 0 16 0V7|M4 12v5a8 3 0 0 0 16 0v-5",
    },
    {
      title: "Explorer",
      desc: "Track blocks, transactions, aliases and tokens in real time.",
      href: "https://explorer.signum.network",
      external: true,
      icon: "M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z|M21 21l-4.3-4.3",
    },
    {
      title: "SignumSwap",
      desc: "Swap tokens and access DeFi tools on Signum.",
      href: "https://www.signumswap.com",
      external: true,
      icon: "M4 7h13l-3-3|M20 17H7l3 3",
    },
    {
      title: "SignaAI",
      desc: "AI agent payments, verification and escrow on Signum mainnet.",
      href: "https://www.signaai.io/",
      external: true,
      icon: "M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z|M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z",
    },
    {
      title: "Learn",
      desc: "Short guides to get started — wallet, SIGNA and mining.",
      href: "https://docs.signum.network/signum",
      external: true,
      icon: "M4 5.5A1.5 1.5 0 0 1 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z|M20 5.5A1.5 1.5 0 0 0 18.5 4H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z",
    },
  ];

  const Body = ({ c }: { c: (typeof cards)[number] }) => (
    <>
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-signum-blue/15 text-signum-blue ring-1 ring-signum-blue/25">
        <EcoIcon d={c.icon} />
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink-100">
        {c.title}
      </h3>
      <p className="mt-1 text-sm text-ink-300">{c.desc}</p>
      <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-signum-blue">
        <span className="transition group-hover:translate-x-0.5">Open</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </div>
    </>
  );

  return (
    <section id="ecosystem" className="scroll-mt-16 bg-night py-20 sm:py-24">
      <Container>
        <div className="text-center">
          <div className="kicker-blue">The Signum ecosystem</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
            Tools, integrations & partners
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-ink-300">
            Everything you need to get started — wallet, SIGNA, mining, AI
            agents and the essential tools.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, index) => {
            const isLast = index === cards.length - 1;
            const className = `group card-dark p-6 ${
              isLast ? "lg:col-start-2" : ""
            }`;
            return c.external ? (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className={className}
              >
                <Body c={c} />
              </a>
            ) : (
              <Link key={c.title} to={c.to ?? c.href} className={className}>
                <Body c={c} />
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
    <section className="bg-night py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-night-2 px-6 py-16 text-center ring-1 ring-white/10 sm:px-12">
          <div className="glow-blob left-1/2 top-[-8rem] h-72 w-[36rem] -translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl lg:text-5xl">
              Ready to experience the future of practical crypto?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-300">
              Download a wallet, get SIGNA, and join a community building
              practical crypto — without the noise.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/wallet" className="btn btn-primary">
                Download Wallet
              </Link>
              <Link to="/exchanges" className="btn btn-outline">
                Get SIGNA
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
