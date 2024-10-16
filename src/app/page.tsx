
import CategoryTable from "@/components/24-7/tablestack/CategoryTable";
import Tickets from "@/components/24-7/tablestack/Tickets";
import TicketTable from "@/components/24-7/tablestack/TicketTable";

export default function Home() {
  return (
    <main className="flex flex-col h-screen p-10">
      <Tickets/>
     <CategoryTable/>
    </main>
  );
}
