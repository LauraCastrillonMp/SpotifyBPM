
import { options } from "@/app/api/auth/[...nextauth]/options";
import InitialScreen from "@/components/initial-screen";
import { getServerSession } from "next-auth";
import Transfer from "./(routes)/transfer/page";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <Transfer />
      ) : (
        <InitialScreen />
      )}
    </>  
  );
}
