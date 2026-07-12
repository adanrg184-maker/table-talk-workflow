import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/c0c4ea60-60cc-43b1-a1ab-6bd2cd2afab6/hero-image-5959df7c-1783635159975.webp')"}}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">L'Artisan Boulangerie & Café</h1>
        <p className="text-lg sm:text-xl text-white/90">Handcrafted breads, pastries, and coffee.</p>
        <Button asChild>
          <a href="#menu">View Menu</a>
        </Button>
      </div>
    </section>
  );
}
