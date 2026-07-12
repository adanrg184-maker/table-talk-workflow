export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About L'Artisan</h2>
            <p className="text-muted-foreground">
              Welcome to L'Artisan Boulangerie & Café, where the aroma of freshly baked bread fills the air. We are a
              passionate team of bakers and coffee enthusiasts dedicated to crafting the most exquisite artisanal
              breads, pastries, and specialty coffees. Our journey began with a simple mission: to bring the authentic
              taste of a Parisian boulangerie to your neighborhood.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Philosophy</h3>
            <p className="text-muted-foreground">
              We believe in using only the finest, locally sourced ingredients. Our dough is fermented for over 24
              hours, resulting in a complex flavor and a perfect crust. Every loaf is shaped by hand and baked in our
              stone-deck ovens. We are committed to quality, tradition, and the simple pleasure of a good cup of
              coffee and a warm croissant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
