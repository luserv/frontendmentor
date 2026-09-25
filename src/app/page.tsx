import Image from "next/image";
import Link from "next/link";

type Level = "Newbie" | "Junior" | "Intermediate";

interface Challenge {
  title: string;
  href: string;
  preview: string;
}

const challengesByLevel: Record<Level, Challenge[]> = {
  Newbie: [
    {
      title: "QR Code Component",
      href: "/newbie/qr-code-component",
      preview: "/newbie/qr-code-component/image-qr-code.png",
    },
    {
      title: "NFT Preview Card Component",
      href: "/newbie/nft-card-component",
      preview: "/newbie/nft-card-component/design/desktop-preview.jpg",
    },
    {
      title: "Huddle Landing Page",
      href: "/newbie/huddle-landing-page",
      preview:
        "/newbie/huddle-landing-page-with-single-introductory-section/design/desktop-preview.jpg",
    },
    {
      title: "Interactive Rating Component",
      href: "/newbie/interactive-rating-component",
      preview: "/newbie/interactive-rating-component/design/desktop-preview.jpg",
    },
    {
      title: "Order Summary Component",
      href: "/newbie/order-summary-component",
      preview: "/newbie/order-summary-component/design/desktop-preview.jpg",
    },
    {
      title: "Product Preview Card Component",
      href: "/newbie/product-preview-card-component",
      preview:
        "/newbie/product-preview-card-component/design/desktop-preview.jpg",
    },
  ],
  Junior: [
    {
      title: "Age Calculator App",
      href: "/junior/age-calculator-app",
      preview: "/junior/age-calculator-app/design/desktop-preview.jpg",
    },
    {
      title: "Fylo Landing Page",
      href: "/junior/fylo-landing-page",
      preview: "/junior/fylo-landing-page/design/desktop-preview.jpg",
    },
  ],
  Intermediate: [
    {
      title: "Todo App",
      href: "/intermediate/todo-app",
      preview: "/intermediate/todo-app/preview.jpg",
    },
  ],
};

const levelBadgeStyles: Record<Level, string> = {
  Newbie:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300",
  Junior: "bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300",
  Intermediate:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300",
};

const levels = Object.keys(challengesByLevel) as Level[];
const totalChallenges = levels.reduce(
  (total, level) => total + challengesByLevel[level].length,
  0
);

function ChallengeCard({
  challenge,
  level,
}: {
  challenge: Challenge;
  level: Level;
}) {
  return (
    <li>
      <Link
        href={challenge.href}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-gray-800 dark:bg-gray-900 md:hover:-translate-y-0.5 md:hover:shadow-md"
      >
        <div className="relative aspect-[16/10] bg-gray-100 dark:bg-gray-800">
          <Image
            src={challenge.preview}
            alt={`${challenge.title} preview`}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <span
            className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${levelBadgeStyles[level]}`}
          >
            {level}
          </span>
          <h3 className="text-base font-semibold group-hover:underline">
            {challenge.title}
          </h3>
          <p className="mt-auto truncate font-mono text-xs text-gray-500 dark:text-gray-400">
            {challenge.href}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-10 px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <header className="flex flex-col gap-3 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Frontend Mentor Projects
          </h1>
          <p className="mx-auto max-w-prose text-sm text-gray-600 dark:text-gray-400 md:text-base">
            My collection of Frontend Mentor challenges, built with Next.js,
            TypeScript and Tailwind CSS.
          </p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {totalChallenges} challenges across {levels.length} levels
          </p>
        </header>

        {levels.map((level) => (
          <section
            key={level}
            aria-labelledby={`level-${level}`}
            className="flex flex-col gap-4"
          >
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 dark:border-gray-800">
              <h2 id={`level-${level}`} className="text-xl font-bold md:text-2xl">
                {level}
              </h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {challengesByLevel[level].length}
              </span>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {challengesByLevel[level].map((challenge) => (
                <ChallengeCard
                  key={challenge.href}
                  challenge={challenge}
                  level={level}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
