import MainCta from "@/components/mainCta";
import PrivacyPolicy from "@/components/privacy";


export default function Projects() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center">
      <PrivacyPolicy/>
      <MainCta/>
    </main>
  );
}