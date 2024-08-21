import Detection from "@/components/detection";

export default function CatDetection() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center p-8">
      <h1 className=" gradient-title font-extrabold text-xl md:text-3xl lg:text-5xl tracking-tighter,">Cat Detection Alarm</h1>
      <Detection/>
    </main>
  );
}