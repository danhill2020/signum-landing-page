import { Link } from "react-router-dom";
import Container from "./Container";
import heroImg from "../assets/img/landing/hero-isometric.png";

const trustChips = ["Developers", "Miners", "Businesses", "Communities"];

export default function HeroSignum() {
  return (
    <section className="relative isolate flex min-h-[540px] items-center overflow-hidden bg-night text-ink-100 sm:min-h-[560px] md:min-h-[390px] lg:min-h-[520px] xl:min-h-[560px]">
      {/* subtle grid mesh across full section */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,170,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(120,170,255,0.18) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 65% 45%, black 30%, transparent 80%)",
        }}
      />

      {/* Hero artwork as a full-width banner. Dark overlays keep the copy readable. */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[38%] top-1/2 h-[80%] w-[58%] -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,140,255,0.28) 0%, rgba(0,120,255,0.10) 45%, transparent 72%)",
            filter: "blur(55px)",
          }}
        />
        <img
          src={heroImg}
          alt="Signum network — isometric illustration"
          className="absolute inset-0 h-full w-full object-cover object-[62%_50%] opacity-35 md:opacity-100"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #060d1e 0%, rgba(6,13,30,0.94) 22%, rgba(6,13,30,0.62) 43%, rgba(6,13,30,0.15) 72%, #060d1e 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-transparent to-night" />
      </div>

      {/* Left copy — sits above the image */}
      <Container className="relative z-10 py-10 md:py-6 lg:py-12">
        <div className="w-full max-w-[430px]">
          <div className="kicker-blue">Sustainable · Secure · Practical</div>

          <h1 className="mt-4 text-[clamp(1.85rem,3vw,2.55rem)] font-bold leading-[1.05] tracking-tight">
            Built for utility.
            <br />
            Designed to last.
            <br />
            <span className="text-signum-blue">This is Signum.</span>
          </h1>

          <p className="mt-4 max-w-[400px] text-sm leading-[1.5] text-ink-300 lg:text-[15px] lg:leading-[1.55]">
            Signum is sustainable blockchain infrastructure powering payments,
            smart contracts, tokens and autonomous agents — secured by disk
            space with Proof-of-Commitment (PoC+).
          </p>

          <div className="mt-5 flex flex-wrap gap-3 lg:mt-6">
            <Link to="/exchanges" className="btn btn-primary px-5 py-2.5">
              Get SIGNA
            </Link>
            <a href="#ecosystem" className="btn btn-outline px-5 py-2.5">
              Explore Ecosystem
            </a>
          </div>

          <div className="mt-5 lg:mt-7">
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
      </Container>
    </section>
  );
}
