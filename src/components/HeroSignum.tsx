import { Link } from "react-router-dom";
import Container from "./Container";
import heroImg from "../assets/img/landing/hero-isometric.png";

const trustChips = ["Developers", "Miners", "Businesses", "Communities"];

const floatingBadges = [
  { label: "Consensus", value: "PoC+", className: "left-2 top-6 sm:left-6" },
  {
    label: "Throughput",
    value: "Up to 5,000 STP/s",
    className: "right-2 top-10 sm:right-6",
  },
  {
    label: "Powered by",
    value: "Signum by nature",
    className: "left-6 bottom-16 sm:left-10",
  },
  {
    label: "Live since",
    value: "2014",
    className: "right-4 bottom-8 sm:right-10",
  },
];

export default function HeroSignum() {
  return (
    <section className="relative isolate overflow-hidden bg-night text-ink-100">
      {/* ambient glow */}
      <div className="glow-blob -left-40 top-[-10rem] h-[28rem] w-[28rem]" />
      <div className="glow-blob right-[-12rem] top-24 h-[34rem] w-[34rem] opacity-70" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,170,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(120,170,255,0.18) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, black 35%, transparent 75%)",
        }}
      />

      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Left: copy */}
        <div>
          <div className="kicker-blue">Sustainable · Secure · Practical</div>

          <h1 className="mt-5 text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1.05] tracking-tight">
            Built for utility.
            <br />
            Designed to last.
            <br />
            <span className="text-signum-blue">This is Signum.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
            Signum is sustainable blockchain infrastructure powering payments,
            smart contracts, tokens and autonomous agents — secured by disk
            space with Proof-of-Commitment (PoC+).
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/exchanges" className="btn btn-primary">
              Get SIGNA
            </Link>
            <a href="#ecosystem" className="btn btn-outline">
              Explore Ecosystem
            </a>
          </div>

          <div className="mt-10">
            <div className="text-xs uppercase tracking-widest text-ink-400">
              Trusted by builders worldwide
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {trustChips.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-white/5 px-3 py-1 text-sm text-ink-300 ring-1 ring-white/10"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: hero artwork with floating badges */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-0 -z-10 scale-110 rounded-[2.5rem] bg-signum-blue/20 blur-3xl" />
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <img
              src={heroImg}
              alt="Signum network — isometric illustration"
              className="h-full w-full object-cover"
            />
          </div>

          {floatingBadges.map((b) => (
            <div
              key={b.label}
              className={`absolute ${b.className} rounded-2xl bg-night-2/85 px-4 py-2 text-left ring-1 ring-white/10 backdrop-blur`}
            >
              <div className="text-[10px] uppercase tracking-widest text-ink-400">
                {b.label}
              </div>
              <div className="text-sm font-semibold text-ink-100">
                {b.value}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
