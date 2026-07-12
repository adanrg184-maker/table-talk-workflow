import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = {
  breads: [
    { name: "Sourdough", price: "$8", description: "Classic sourdough with a tangy flavor." },
    { name: "Baguette", price: "$4", description: "A long, thin loaf of French bread." },
    { name: "Brioche", price: "$10", description: "A light, slightly sweet bread." },
  ],
  pastries: [
    { name: "Croissant", price: "$5", description: "Buttery and flaky." },
    { name: "Pain au Chocolat", price: "$6", description: "Croissant with dark chocolate." },
    { name: "Macarons", price: "$3", description: "Delicate almond meringue cookies." },
  ],
  cakes: [
    { name: "Chocolate Cake", price: "$7", description: "Rich and decadent." },
    { name: "Carrot Cake", price: "$8", description: "Moist and flavorful with cream cheese frosting." },
    { name: "Cheesecake", price: "$9", description: "Creamy and smooth." },
  ],
};

export default function Menu() {
  return (
    <section id="menu" className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-8">Our Menu</h2>
        <Tabs defaultValue="breads" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="breads">Breads</TabsTrigger>
            <TabsTrigger value="pastries">Pastries</TabsTrigger>
            <TabsTrigger value="cakes">Cakes</TabsTrigger>
          </TabsList>
          <TabsContent value="breads">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
              {menuItems.breads.map((item) => (
                <Card key={item.name}>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pastries">
             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
              {menuItems.pastries.map((item) => (
                <Card key={item.name}>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="cakes">
             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
              {menuItems.cakes.map((item) => (
                <Card key={item.name}>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
