import About from "@/components/about";
import MainCta from "@/components/mainCta";


export default function AboutPage() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center">
      <About/>
      <MainCta/>
    </main>
  );
}