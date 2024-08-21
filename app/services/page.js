import MainCta from "@/components/mainCta";
import Service from "@/components/services";


export default function Services() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center">
      <Service/>
      <MainCta/>
    </main>
  );
}