"use client";
import { generateMnemonicfn, generateWallet } from "@/function/Wallet";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import MnemonicDisplay from "./MnemonicDisplay";
import { Grid2X2, List } from "lucide-react";
import WalletCard from "./WalletCard";

interface Wallet {
  publicKey: string;
  privateKey: string;
  index: number;
}

export default function HomeDisplay() {
  const [mounted, setMounted] = useState(false);
  const [mnemonic, setMnemonic] = useState("");
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [gridView, setGridView] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mnemonic");
    const savedCount = Number(localStorage.getItem("walletCount") ?? "0");
    setMounted(true);
    if (!saved) return;
    setMnemonic(saved);
    if (savedCount > 0) {
      setWallets(
        Array.from({ length: savedCount }, (_, i) => generateWallet(saved, i)),
      );
    }
  }, []);

  if (!mounted) return null;

  function handleGenerate() {
    const newMnemonic = generateMnemonicfn();
    localStorage.setItem("mnemonic", newMnemonic);
    setMnemonic(newMnemonic);
    const firstWallet = generateWallet(newMnemonic, 0);
    localStorage.setItem("walletCount", "1");
    setWallets([firstWallet]);
  }

  function handleAddWallet() {
    const newWallet = generateWallet(mnemonic, wallets.length);
    localStorage.setItem("walletCount", String(wallets.length + 1));
    setWallets([...wallets, newWallet]);
  }

  function handleClear() {
    localStorage.removeItem("mnemonic");
    setMnemonic("");
    localStorage.removeItem("walletCount");
    setWallets([]);
  }

  return (
    <>
      {mnemonic === "" ? (
        <div className="min-h-[65vh] pt-20">
          <div className="text-3xl font-medium tracking-tight pb-6">
            Lens supports solana blockchain
          </div>
          <Button className="py-4.5 px-3.5" onClick={handleGenerate}>
            Generate Wallet
          </Button>
        </div>
      ) : (
        <>
          <MnemonicDisplay mnemonic={mnemonic} />
          <div className="flex items-center justify-between pb-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Solana Wallets
            </h2>
            <div className="flex gap-2">
              <Button variant="ghost" onClick={() => setGridView(!gridView)}>
                {gridView ? (
                  <List className="size-4" />
                ) : (
                  <Grid2X2 className="size-4" />
                )}
              </Button>
              <Button className="py-4.5 px-3.5" onClick={handleAddWallet}>
                Add Wallet
              </Button>
              <Button
                className="py-4.5 px-3.5"
                variant="destructive"
                onClick={handleClear}
              >
                Clear Wallet
              </Button>
            </div>
          </div>
          <div
            className={`grid gap-6 ${gridView ? "md:grid-cols-2" : "grid-cols-1"}`}
          >
            {wallets.map((wallet) => (
              <WalletCard key={wallet.index} wallet={wallet} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
