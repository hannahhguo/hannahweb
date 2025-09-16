import IntroHero from "@/components/IntroHero";

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex max-w-4xl flex-col px-6 pt-24 pb-16 md:pt-32">
        <IntroHero />
      </div>
    </main>
  );
}
