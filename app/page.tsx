import InitialScreen from "@/components/initial-screen";
import Transfer from "./(routes)/transfer/page";

export default async function Home() {

  return (
    <section className="w-full flex flex-col items-center justify-center px-2 md:px-8 py-2 md:py-6">
      <InitialScreen />
    </section> 
  );
}
