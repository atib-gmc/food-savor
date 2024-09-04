import Hero from "@/components/main/Main";
import Section1 from "@/components/section1/Section1";
import Section2 from "@/components/section2/Section2";

export default function Home() {
  return (
    <main className="px-10" >
      <Hero />
      <Section1 />
      <Section2 />
      <footer className="bg-white rounded-xl p-10 w-full min-h-xl my-8 shadow-xl ">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Are you ready to fight food waste?</h1>
          <button className="bg-primary py-2 px-8 rounded-full shadow-lg text-white">Join now</button>
        </div>
      </footer>
    </main>
  );
}
