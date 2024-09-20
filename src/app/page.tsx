import Image from "next/image";
import ClientProfilesPage from "@/components/ClientPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <ClientProfilesPage/>
    </main>
  );
}
