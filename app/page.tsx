import Navbar from "@/components/Navbar";
import WalletGenerator from "@/components/mainDisplay";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col min-h-screen overflow-x-hidden pt-26">
      <Navbar />
      <WalletGenerator />
    </main>
  );
}
