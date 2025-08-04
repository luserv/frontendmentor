import Image from "next/image";

export default function ProductPreviewCardComponent() {
  return (
    <main className="min-h-screen bg-[hsl(30,38%,92%)] flex items-center justify-center p-4">
      <div className="max-w-[600px] bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="md:flex">
          <div className="md:w-1/2">
            <Image 
              src="/product-preview-card-component/img/image-product-desktop.jpg" 
              alt="chanel-destop"
              width={600}
              height={900}
              className="hidden md:block w-full h-full object-cover"
            />
            <Image 
              src="/product-preview-card-component/img/image-product-mobile.jpg" 
              alt="chanel-desktop"
              width={686}
              height={480} 
              className="md:hidden w-full h-64 object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 space-y-6">
            <span className="text-[hsl(228,12%,48%)] text-sm font-medium tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>
              PERFUME
            </span>
            <h1 className="text-[hsl(212,21%,14%)] text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: 'var(--font-fraunces)' }}>
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="text-[hsl(228,12%,48%)] text-base leading-relaxed" style={{ fontFamily: 'var(--font-montserrat)' }}>
              A floral, solar and voluptuous interpretation composed by Olivier Polge, 
              Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[hsl(158,36%,37%)] text-3xl font-bold" style={{ fontFamily: 'var(--font-fraunces)' }}>
                $149.99
              </span>
              <span className="text-[hsl(228,12%,48%)] text-base line-through" style={{ fontFamily: 'var(--font-montserrat)' }}>
                $169.99
              </span>
            </div>
            <button 
              type="submit"
              className="w-full bg-[hsl(158,36%,37%)] hover:bg-[hsl(158,36%,20%)] text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors duration-300"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              <Image 
                src="product-preview-card-component/img/icon-cart.svg" 
                alt="icon card svg"
                width={5}
                height={5}
                className="w-5 h-5"
              />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}