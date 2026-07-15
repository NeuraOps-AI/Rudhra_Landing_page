const firstLineWords = ["More", "Than", "Homes."];

export function AnimatedHeroTitle() {
  return (
    <h1 className="hero-heading hero-heading-readable mt-4 min-h-[4.8rem] !text-white sm:min-h-[5.6rem] lg:min-h-[6.2rem]">
      <span className="block overflow-hidden pb-1">
        {firstLineWords.map((word, index) => (
          <span
            key={word}
            className="hero-word-reveal mr-[0.2em] inline-block"
            style={{ animationDelay: `${3200 + index * 120}ms` }}
          >
            {word}
          </span>
        ))}
      </span>
      <span className="block overflow-hidden pb-1">
        <span
          className="hero-accent-reveal hero-heading-accent mt-1 block !text-white/90"
          style={{ animationDelay: "3660ms" }}
        >
          Better Lives.
        </span>
      </span>
    </h1>
  );
}
