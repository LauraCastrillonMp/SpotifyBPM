
import { options } from "@/app/api/auth/[...nextauth]/options";
import InitialScreen from "@/components/initial-screen";
import { getServerSession } from "next-auth";
import Transfer from "./(routes)/transfer/page";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <section className="w-full flex flex-col items-center justify-center px-2 md:px-8 py-2 md:py-6">
      {session ? <Transfer /> : <InitialScreen />}
    </section> 
  );
}
