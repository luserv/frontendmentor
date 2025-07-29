import Image from "next/image";

export default function OrderSummaryComponent() {
  return (
    <main className="min-h-screen bg-[hsl(225,100%,94%)] flex items-center justify-center p-4">

      <Image 
            src="/order-summary-component/img/pattern-background-desktop.svg" 
            alt="hero"
            width={1920}
            height={1080}
            className="absolute top-0 w-full h-auto hidden md:block"
          />

          
      <Image 
            src="/order-summary-component/img/pattern-background-mobile.svg" 
            alt="hero" 
            width={375}
            height={220}
            className="absolute top-0 w-full h-auto md:hidden"
          />
      
      <div className="max-w-[450px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative">
          <Image 
            src="/order-summary-component/img/illustration-hero.svg" 
            alt="hero" 
            width={450}
            height={220}
            className="w-full h-auto"
            priority
          />
        </div>
        
        <div className="relative bg-white p-8 text-center space-y-6">
          <h1 className="text-[hsl(223,47%,23%)] text-2xl font-black">
            Order Summary
          </h1>
          
          <p className="text-[hsl(224,23%,55%)] text-base leading-relaxed px-4 font-medium">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>
          
          <div className="bg-[hsl(225,100%,98%)] rounded-xl p-6 mx-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image 
                  src="/order-summary-component/img/icon-music.svg" 
                  alt="icon music"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div className="text-left">
                  <h2 className="text-[hsl(223,47%,23%)] font-bold text-lg">
                    Annual Plan
                  </h2>
                  <span className="text-[hsl(224,23%,55%)] text-base font-medium">
                    $59.99/year
                  </span>
                </div>
              </div>
              <span className="text-[hsl(245,75%,52%)] font-bold hover:text-[hsl(245,75%,65%)] transition-colors cursor-pointer underline">
                Change
              </span>
            </div>
          </div>
          
          <div className="space-y-4 px-4">
            <button className="w-full bg-[hsl(245,75%,52%)] hover:bg-[hsl(245,75%,65%)] text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-colors duration-300">
              Proceed to Payment
            </button>
            <button className="w-full text-[hsl(224,23%,55%)] font-bold hover:text-[hsl(223,47%,23%)] transition-colors duration-300">
              Cancel Order
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}