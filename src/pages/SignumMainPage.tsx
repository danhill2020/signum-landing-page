import SeoHelmet from "../components/SEOHelmet";
import Container from "../components/Container";
import { Link } from "react-router-dom";

import HeroSignum from "../components/HeroSignum";
import FeatureImageCard from "../components/FeatureImageCard";
import type { FeatureCard } from "../components/FeatureImageCard";

import featurePayments from "../assets/img/landing/feature-payments.png";
import featureWallets from "../assets/img/landing/feature-wallets.png";
import featureMining from "../assets/img/landing/feature-mining.png";
import featureContracts from "../assets/img/landing/feature-contracts.png";
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
        <LearnSection />
        <CTA />
      </div>
    </>
  );
}

function StatsBand() {
  const stats = [
    { value: "Since 2014", label: "Proven mainnet" },
    { value: "PoC+", label: "Disk-space consensus" },
    { value: "0.01 SIGNA", label: "Minimum transfer fee" },
    { value: "~4 min", label: "Predictable block time" },
  ];

  return (
    <section className="border-y border-white/10 bg-night-2/85">
      <Container>
        <ul className="grid gap-px py-px sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <li
              key={s.label}
              className="bg-night-2 px-5 py-5 text-center sm:py-6"
            >
              <div className="text-lg font-semibold tracking-tight text-ink-100 sm:text-xl">
                {s.value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-ink-400">
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
      desc: "Secure the network with disk space and boost rewards by committing SIGNA on-chain.",
      img: heroIsometric,
      to: "/pocplus",
      imagePosition: "center 48%",
      wide: true,
    },
    {
      title: "Payments",
      desc: "Low-fee transfers with aliases, attachments and multi-out support.",
      img: featurePayments,
      to: "/payments",
      imagePosition: "68% 52%",
    },
    {
      title: "Wallets",
      desc: "Manage SIGNA from desktop, mobile and hardware-backed wallets.",
      img: featureWallets,
      to: "/wallet",
      imagePosition: "62% 50%",
    },
    {
      title: "Mining",
      desc: "Home-miner friendly setup for pool or solo mining with disk space.",
      img: featureMining,
      to: "/mining",
      imagePosition: "65% 52%",
    },
    {
      title: "Smart Contracts",
      desc: "Create autonomous on-chain logic for payments, tokens and apps.",
      img: featureContracts,
      to: "/smartcontracts",
      imagePosition: "66% 52%",
    },
    {
      title: "Ecosystem",
      desc: "Wallets, exchanges, DeFi, NFTs, AI and builders connected by Signum.",
      img: featureEcosystem,
      href: "#ecosystem",
      imagePosition: "center 48%",
      wide: true,
    },
  ];

  return (
    <section id="features" className="scroll-mt-16 bg-night py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="kicker-blue">Core network capabilities</div>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
              Sustainable blockchain infrastructure for payments, contracts and
              mining.
            </h2>
            <p className="mt-3 max-w-2xl text-ink-300">
              Start with the primitives that matter: reliable transactions,
              programmable logic, accessible mining and wallets people can
              actually use.
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

        <SustainabilityProof />
      </Container>
    </section>
  );
}

function SustainabilityProof() {
  const points = [
    {
      title: "Energy-aware by design",
      text: "Security comes from committed disk capacity instead of constant high-power hashing.",
    },
    {
      title: "Open participation",
      text: "Mining can run on accessible hardware, keeping the network approachable for smaller operators.",
    },
    {
      title: "Long-term utility",
      text: "A decade of mainnet history backs the practical payments, tokens and contract layer.",
    },
  ];

  return (
    <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-night-2/60 p-4 sm:grid-cols-3">
      {points.map((point) => (
        <div key={point.title} className="p-3">
          <div className="text-sm font-semibold text-ink-100">
            {point.title}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-300">
            {point.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function SignaAISection() {
  const layers = [
    {
      title: "Payments",
      text: "Agents can send and receive SIGNA with predictable fees.",
    },
    {
      title: "Identity",
      text: "On-chain accounts give agents a traceable operating history.",
    },
    {
      title: "Verify",
      text: "Outputs can be timestamped so later changes are detectable.",
    },
    {
      title: "Escrow",
      text: "Smart contracts can hold payment until agreed conditions are met.",
    },
  ];

  return (
    <section className="bg-night py-14 sm:py-18">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-night-2 p-6 ring-1 ring-white/10 md:p-8 lg:p-10">
          <div className="glow-blob -right-24 -top-24 h-60 w-60" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-signum-blue/15 px-3 py-1.5 text-xs font-semibold text-signum-blue ring-1 ring-signum-blue/30">
                <span className="h-2 w-2 rounded-full bg-signum-lightgreen" />
                Built on Signum
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-ink-100 sm:text-3xl lg:text-4xl">
                SignaAI uses Signum as an accountability layer for autonomous
                agents.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-300">
                Hire, verify and pay AI agents on-chain with proof of who
                produced what, when it was stamped and whether payment
                conditions were satisfied.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
                  Developer docs
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-2xl bg-night p-5 text-ink-100 ring-1 ring-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-400">
                      Developer Preview
                    </div>
                    <div className="mt-2 text-xl font-semibold">
                      pip install signaai
                    </div>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-ink-300">
                    Mainnet
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-black/40 p-4 font-mono text-sm text-signum-lightgreen">
                  <div>$ pip install signaai</div>
                  <div className="mt-1 text-ink-400">
                    # pay, prove and settle work on-chain
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                {layers.map((layer) => (
                  <div key={layer.title} className="card-dark p-4">
                    <h3 className="text-sm font-semibold text-ink-100">
                      {layer.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-300">
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

function LearnSection() {
  return (
    <section id="learn" className="scroll-mt-16 bg-night py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="kicker-blue">Guides, tutorials & insights</div>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
              Short videos to get you from{" "}
              <span className="text-signum-blue">zero</span> to{" "}
              <span className="text-signum-blue">Signum Pro</span>.
            </h2>
            <p className="mt-3 max-w-2xl text-ink-300">
              Wallet setup, getting SIGNA, mining and managing your commitment —
              straight to the point.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@signum_network"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline shrink-0"
          >
            More on YouTube
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <a
              key={v.href}
              href={v.href}
              target="_blank"
              rel="noreferrer"
              className="group card-dark overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden bg-night">
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition group-hover:opacity-100">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-signum-blue text-white">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold leading-snug text-ink-100">
                  {v.title}
                </h3>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-signum-blue">
                  <span className="transition group-hover:translate-x-0.5">
                    Watch
                  </span>
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
              </div>
            </a>
          ))}
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
