import { Link } from "react-router-dom";

export type FeatureCard = {
  title: string;
  desc: string;
  img: string;
  to?: string;
  href?: string;
  /** spans two columns on lg+ */
  wide?: boolean;
};

const Arrow = () => (
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
    className="transition-transform group-hover:translate-x-0.5"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

function Inner({ c }: { c: FeatureCard }) {
  return (
    <>
      <img
        src={c.img}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-night/10" />
      <div className="relative flex h-full flex-col justify-end p-6">
        <h3 className="text-xl font-semibold tracking-tight text-ink-100">
          {c.title}
        </h3>
        <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-300">
          {c.desc}
        </p>
        <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-signum-blue">
          Learn more
          <Arrow />
        </div>
      </div>
    </>
  );
}

export default function FeatureImageCard({ c }: { c: FeatureCard }) {
  const className = `group relative isolate flex min-h-[18rem] overflow-hidden rounded-2xl ring-1 ring-white/10 transition hover:ring-signum-blue/40 hover:shadow-[0_22px_70px_-20px_rgba(0,153,255,0.45)] ${
    c.wide ? "lg:col-span-2" : ""
  }`;

  if (c.href) {
    const isHash = c.href.startsWith("#");
    return (
      <a
        href={c.href}
        className={className}
        {...(isHash ? {} : { target: "_blank", rel: "noreferrer" })}
      >
        <Inner c={c} />
      </a>
    );
  }
  return (
    <Link to={c.to ?? "#"} className={className}>
      <Inner c={c} />
    </Link>
  );
}
