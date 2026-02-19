export default function Home() {
  return (
    <main className="min-h-screen dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 md:px-8 py-10 flex flex-col items-center text-center gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Frontend Mentor Projects
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          Welcome to my collection of Frontend Mentor projects.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          I&apos;m using Next.js 15 and TypeScript to build and Tailwind CSS to
          style these projects.
        </p>

        <section className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold">Newbie Projects</h2>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            <li>
              <a
                className="block rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                href="/newbie/qr-code-component"
              >
                QR Code Component
              </a>
            </li>
            <li>
              <a
                className="block rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                href="/newbie/nft-preview-card-component"
              >
                NFT Preview Card Component
              </a>
            </li>
            <li>
              <a
                className="block rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                href="/newbie/huddle-landing-page"
              >
                Huddle Landing Page
              </a>
            </li>
            <li>
              <a
                className="block rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                href="/newbie/interactive-rating-component"
              >
                Interactive Rating Component
              </a>
            </li>
            <li>
              <a
                className="block rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                href="/newbie/order-summary-component"
              >
                Order Summary Component
              </a>
            </li>
            <li>
              <a
                className="block rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                href="/newbie/product-preview-card-component"
              >
                Product Preview Card Component
              </a>
            </li>
          </ul>
        </section>

        <section className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold">Junior Projects</h2>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            <li>
              <a
                className="block rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                href="/junior/age-calculator-app"
              >
                Age Calculator App
              </a>
            </li>
            <li>
              <a
                className="block rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                href="/junior/fylo-landing-page"
              >
                Fylo Landing Page
              </a>
            </li>
          </ul>
        </section>

        <section className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold">Intermediate Projects</h2>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            <li>
              <a
                className="block rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                href="/intermediate/todo-app"
              >
                Todo App
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
