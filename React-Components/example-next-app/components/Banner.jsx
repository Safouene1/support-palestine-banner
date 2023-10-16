import Link from "next/link";

export default function Banner() {
  const isDarkMode = false;
  const title = "Free Palestine 🇵🇸";
  const description = `Stand for humanity! Palestine has a right to defend itself. Together, we can put an end to the Gaza genocide. Let's unite to #SAVEGAZA and ensure that every life in this region has access to the most basic necessities.`;
  const linkTo = "https://twitter.com/search?q=%23PalestineLivesMatter";
  // ---- change the content above if you want to ----

  return (
    <div
      className={`relative sm:sticky top-0 isolate z-50 flex items-center overflow-hidden ${
        isDarkMode ? "bg-gray-600/70" : "bg-gray-50/70"
      } px-3.5 py-2.5 backdrop-blur-sm  md:px-6`}
    >
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <BlurDiv />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <BlurDiv />
      </div>
      <p
        className={`mx-auto text-sm leading-4 sm:leading-6 ${
          isDarkMode ? "text-gray-300" : "text-gray-900"
        }`}
      >
        <Link href={linkTo} target="_blank">
          <strong className="font-semibold">{title}</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          {description}
        </Link>
      </p>
    </div>
  );
}

const BlurDiv = () => (
  <div
    className={`aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#149954] to-[#E4312b] opacity-80 md:opacity-50`}
    style={{
      clipPath:
        "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
    }}
  />
);
