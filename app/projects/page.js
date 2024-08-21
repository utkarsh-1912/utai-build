import MainCta from "@/components/mainCta";
import Products from "@/components/products";


export default function Projects() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center">
      <Products/>
      <MainCta/>
    </main>
  );
}