import Image from "next/image";


export default function nftCard() {
  return (
    <main className="w-screen h-screen bg-[hsl(217,54%,11%)] flex items-center justify-center p-4">
      <div className="w-[350px] bg-[hsl(216,50%,16%)] rounded-2xl p-6 shadow-xl">
        <div className="relative group cursor-pointer">
          <picture className="block w-full">
            <Image 
              src="nft-card-component/img/image-equilibrium.jpg" 
              alt="image equilibrium" 
              className="w-full h-auto rounded-xl"
            />
          </picture>
          <div className="absolute inset-0 bg-cyan-400/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Image 
              src="nft-card-component/img/icon-view.svg" 
              alt="view" 
              className="w-12 h-12"
            />
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          <h1 className="text-white text-xl font-bold hover:text-cyan-400 transition-colors cursor-pointer">
            Equilibrium #3429
          </h1>
          <p className="text-[hsl(215,51%,70%)] text-base leading-relaxed">
            Our Equilibrium collection promotes balance and calm.
          </p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image 
                src="nft-card-component/img/icon-ethereum.svg" 
                alt="ethereum svg" 
                className="w-4 h-4"
              />
              <span className="text-cyan-400 font-semibold">0.041 ETH</span>
            </div>
            <div className="flex items-center gap-2">
              <Image 
                src="nft-card-component/img/icon-clock.svg" 
                alt="clock svg" 
                className="w-4 h-4"
              />
              <span className="text-[hsl(215,51%,70%)]">3 days left</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-[hsl(215,32%,27%)]">
            <div className="flex items-center gap-3">
              <picture>
                <Image 
                  src="nft-card-component/img/image-avatar.png" 
                  alt="image avatar" 
                  className="w-8 h-8 rounded-full border border-white"
                />
              </picture>
              <span className="text-[hsl(215,51%,70%)]">
                Creation of <span className="text-white hover:text-cyan-400 transition-colors cursor-pointer">Jules Wyvern</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}