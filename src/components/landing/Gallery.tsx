const galleryImages = [
  {
    src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c0c4ea60-60cc-43b1-a1ab-6bd2cd2afab6/croissant-4a812f19-1783635159387.webp",
    alt: "A close-up shot of a croissant with a dusting of powdered sugar.",
  },
  {
    src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c0c4ea60-60cc-43b1-a1ab-6bd2cd2afab6/sourdough-29138e8e-1783635161212.webp",
    alt: "A rustic loaf of sourdough bread on a cutting board.",
  },
  {
    src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c0c4ea60-60cc-43b1-a1ab-6bd2cd2afab6/macarons-439e104f-1783635159252.webp",
    alt: "A colorful display of macarons.",
  },
  {
    src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c0c4ea60-60cc-43b1-a1ab-6bd2cd2afab6/chocolate-cake-804695f9-1783635159639.webp",
    alt: "A slice of chocolate cake on a plate.",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img src={image.src} alt={image.alt} className="aspect-square w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
